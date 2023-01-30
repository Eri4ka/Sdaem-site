import { useState, useCallback, useMemo } from 'react';

import { NewsType } from '@mytypes/newsTypes';

type useSearchNewsProps = {
  data: NewsType[];
  setSearchData: (value: NewsType[]) => void;
};

export const useSearchNews = ({ data, setSearchData }: useSearchNewsProps) => {
  const [searchValue, setSearchValue] = useState('');

  const findData = useMemo(() => {
    return data.filter((item) => item.title.toLowerCase().includes(searchValue));
  }, [data, searchValue]);

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchData(findData);
    },
    [findData, setSearchData],
  );

  const handleSetSearchValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const tarValue = e.target.value;
    setSearchValue(tarValue);
  }, []);

  return { handleSearch, handleSetSearchValue };
};
