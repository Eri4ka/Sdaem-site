import { useState, useEffect, useCallback } from 'react';

type useSelectValueProps = {
  initialValue?: string;
  handleSetValue: (field: string, value: string) => void;
  isReset?: boolean;
  name: string;
};

export const useSelectValue = ({
  initialValue,
  handleSetValue,
  name,
  isReset,
}: useSelectValueProps) => {
  const _stateValue = initialValue ?? '';

  const [selectValue, setSelectValue] = useState<string>(_stateValue);

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
    setSelectValue(_stateValue);
  }, [_stateValue]);

  useEffect(() => {
    handleSetValue(name, selectValue);
  }, [name, handleSetValue, selectValue]);

  useEffect(() => {
    if (isReset) {
      setSelectValue('');
    }
  }, [isReset]);

  return { selectValue, handleSelect };
};
