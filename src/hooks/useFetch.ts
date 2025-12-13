import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export default function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data: T = await response.json();
      setData(data);
    } catch (err) {
      setError((err as Error).message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
