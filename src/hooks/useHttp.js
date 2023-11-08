import { useState } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, method = 'GET', headers = {}, body = null, options) => {
    setLoading(true);
    setError(null)
    let result = new Response(null);

    try {
      const response = await fetch(url, {
        method,
        headers,
        ...options,
        body: body && JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      result = await response.json()
      setLoading(false);

    } catch (error) {
      setError(error);
      setLoading(false);
    }

    return result
  };

  return { sendRequest, loading, error };
}

export default useHttp;





