import { useCallback, useState, useMemo } from 'react';

import { FormFieldsType } from '@mytypes/assistantTypes';

export const useFilter = () => {
  const [fieldValues, setFieldValues] = useState<FormFieldsType>({});
  const [isReset, setIsReset] = useState(false);

  const handleResetFilters = useCallback(() => {
    setIsReset(true);
  }, []);

  const handleSetValue = useCallback((field: string, value: string | number | boolean) => {
    setFieldValues((values) => ({
      ...values,
      [field]: value,
    }));
    setIsReset(false);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsReset(false);
  }, []);

  const notEmptyFieldValues = useMemo(() => {
    let newfieldValues = {};

    for (const key in fieldValues) {
      if (fieldValues[key]) {
        newfieldValues = { [key]: fieldValues[key], ...newfieldValues };
      }
    }
    return newfieldValues as FormFieldsType;
  }, [fieldValues]);

  return { notEmptyFieldValues, isReset, handleResetFilters, handleSetValue, handleSubmit };
};
