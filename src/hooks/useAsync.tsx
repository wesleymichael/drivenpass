import { useState, useEffect } from 'react';

export default function useAsync<T>(
  handler: (...args: any[]) => Promise<T>,
  immediate = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<Error | null>(null);

  const act = async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const result = await handler(...args);
      setData(result);
      setLoading(false);
      return result;
    } catch (error: any) {
      setError(error);
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
