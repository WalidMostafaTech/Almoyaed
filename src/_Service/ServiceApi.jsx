import { useState, useEffect } from 'react';
import i18next from 'i18next';
import { debounce } from 'lodash';

const API_URL = "https://dashboard.almoyaedgroup.com/api";

const ServiceApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = i18next.language;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/webservices`, {
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
  }, [lang]);

  return { data, loading, error };
};

export default ServiceApi;
