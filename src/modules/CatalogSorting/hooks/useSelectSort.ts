import { useState, useCallback, useEffect } from 'react';

import { useAppDispatch } from '@redux/reduxHooks';
import { changeSort } from '@redux/slices/apartmentsSlice';

export const useSelectSort = () => {
  const dispatch = useAppDispatch();

  const [selectValue, setSelectValue] = useState<string>('');

  const handleSelect = useCallback((value: string) => {
    setSelectValue(value);
  }, []);

  const handleDispatchSort = useCallback(
    (sort: string) => {
      switch (sort) {
        case 'По умолчанию':
          dispatch(changeSort('default'));
          break;
        case 'Сначала дешевле':
          dispatch(changeSort('decrease'));
          break;
        case 'Сначала дороже':
          dispatch(changeSort('increase'));
          break;
        default:
          dispatch(changeSort('default'));
          break;
      }
    },
    [dispatch],
  );

  useEffect(() => {
    handleDispatchSort(selectValue);
  }, [selectValue, handleDispatchSort]);

  return { selectValue, handleSelect };
};
