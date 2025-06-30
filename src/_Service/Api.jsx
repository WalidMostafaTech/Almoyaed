import { useState, useEffect } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { debounce } from 'lodash';

const Api = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = i18next.language;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dashboard.almoyaedgroup.com/api/events', {
        headers: {
          'lang': lang,
        },
      });
      setData(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = debounce(fetchData, 300); // Adjust the delay as needed

  useEffect(() => {
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel(); // Cleanup on unmount
    };
  }, [lang]);

  return { data, loading, error };
};

export default Api;
