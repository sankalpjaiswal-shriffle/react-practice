import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
