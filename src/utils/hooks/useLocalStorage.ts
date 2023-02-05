import { useState, useEffect, useCallback, useMemo } from 'react';

const getStorageValue = (key: string) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial = saved ? JSON.parse(saved) : [];
    return initial;
  }
  return [];
};

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState<string[]>(useMemo(() => getStorageValue(key), [key]));

  const handleToggleData = useCallback(
    (id: string) => {
      const isExists = data?.includes(id);
      if (isExists) {
        setData((value) => value.filter((item) => item !== id));
      } else {
        setData((value) => [...value, id]);
      }
    },
    [data],
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return { data, handleToggleData };
};
