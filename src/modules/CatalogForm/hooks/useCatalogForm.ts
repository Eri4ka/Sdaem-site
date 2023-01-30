import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useFilter } from '@hooks/useFilter';
import { useAppDispatch } from '@utils/redux/reduxHooks';
import { addFilters } from '@utils/redux/slices/apartmentsSlice';

export const useCatalogForm = () => {
  const dispatch = useAppDispatch();
  const {
    push,
    query: { alias, ...params },
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any = useRouter();

  const { notEmptyFieldValues, isReset, handleResetFilters, handleSetValue, handleSubmit } =
    useFilter();

  useEffect(() => {
    dispatch(addFilters(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alias]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    dispatch(addFilters(notEmptyFieldValues));
    push({ query: { alias, ...notEmptyFieldValues } }, undefined, { shallow: true });
  };
  return { isReset, handleResetFilters, handleSetValue, onSubmit, params };
};
