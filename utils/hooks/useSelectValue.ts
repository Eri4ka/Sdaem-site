import { useState, useEffect, useCallback } from 'react';

type useSelectValueProps = {
  handleSetValue: (field: string, value: string) => void;
  name: string;
};

export const useSelectValue = ({ handleSetValue, name }: useSelectValueProps) => {
  const [selectValue, setSelectValue] = useState<string>('');

  const handleSelect = useCallback(
    (value: string) => {
      if (selectValue === value) {
        return setSelectValue('');
      }
      setSelectValue(value);
    },
    [selectValue],
  );

  useEffect(() => {
    handleSetValue(name, selectValue);
  }, [name, handleSetValue, selectValue]);

  return { selectValue, handleSelect };
};
