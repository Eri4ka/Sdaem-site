import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useFilter } from '@hooks/useFilter';
import { SingleSectionType } from '@mytypes/sectionTypes';

export const useMainFilter = (cityItems: SingleSectionType[]) => {
  const { push } = useRouter();

  const { notEmptyFieldValues, handleSetValue, handleSubmit } = useFilter();

  const { city, ...params } = notEmptyFieldValues;

  const alias = useMemo(
    () => cityItems?.find((item) => item.title === city)?.alias,
    [cityItems, city],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);

    push({ pathname: alias, query: { ...params } }, undefined, {
      shallow: true,
    });
  };

  const isDisabled = !city;

  return { handleSetValue, onSubmit, isDisabled };
};
