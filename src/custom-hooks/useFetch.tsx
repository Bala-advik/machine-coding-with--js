import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (signal: any) => {
    try {
      setIsLoading(true);
      await fetch(url, { signal })
        .then((res) => res.json())
        .then((res) => setData(res));
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetchData(signal);
    return () => abortController.abort();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
