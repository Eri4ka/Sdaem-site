import { useEffect, useState, useCallback } from 'react';

type useOptionsValueProps = {
  initialValue?: boolean;
  field: string;
  handleSetValue: (field: string, value: boolean) => void;
  isReset?: boolean;
};

export const useOptionsValue = ({
  initialValue,
  handleSetValue,
  field,
  isReset,
}: useOptionsValueProps) => {
  const _stateValue = initialValue ?? false;
  const [checked, setChecked] = useState(_stateValue);

  const handleToggleOption = useCallback(() => {
    setChecked((value) => !value);
  }, []);

  useEffect(() => {
    setChecked(_stateValue);
  }, [_stateValue]);

  useEffect(() => {
    handleSetValue(field, checked);
  }, [field, checked, handleSetValue]);

  useEffect(() => {
    if (isReset) {
      setChecked(false);
    }
  }, [isReset]);

  return { checked, handleToggleOption };
};
