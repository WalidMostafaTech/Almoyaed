import { useState, useEffect } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { debounce } from 'lodash';

const WepSerivceApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = i18next.language;

  const fetchData = async (retries = 3) => {
    setLoading(true);
    try {
      const response = await axios.get('https://dashboard.almoyaedgroup.com/api/settings', {
        headers: {
          'lang': lang,
        },
      });
      setData(response.data?.data);
    } catch (err) {
      if (err.response && err.response.status === 429 && retries > 0) {
        const delay = Math.pow(2, 3 - retries) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchData(retries - 1); // Retry the request
      } else {
        setError(err.message);
      }
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

export default WepSerivceApi;
