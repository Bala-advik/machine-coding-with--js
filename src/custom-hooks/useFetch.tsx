import { useEffect, useState } from "react";

type fetchProps = {
  url: string;
};

const useFetch = ({ url }: fetchProps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
