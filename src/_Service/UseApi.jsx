import i18next from 'i18next';
const API_URL = "https://dashboard.almoyaedgroup.com/api";
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = i18next.language;
  const [cachedData, setCachedData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    if (cachedData[lang]) {
      setData(cachedData[lang]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: 'GET',
        headers: {
          'lang': lang,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result?.data);
      setCachedData(prev => ({ ...prev, [lang]: result?.data }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = debounce(fetchData, 300); // Adjust delay as needed

  useEffect(() => {
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel(); // Cleanup on unmount
    };
  }, [lang, debouncedFetchData]);

  return { data, loading, error };
};

export default useApi;
