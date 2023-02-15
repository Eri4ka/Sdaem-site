import { useState, useCallback, useEffect } from 'react';

type useFromToValueProps = {
  initialFromValue?: string;
  initialToValue?: string;
  handleSetValue: (field: string, value: string) => void;
  isReset?: boolean;
};

export const useFromToValue = ({
  initialFromValue,
  initialToValue,
  handleSetValue,
  isReset,
}: useFromToValueProps) => {
  const _stateFromValue = initialFromValue ?? '';
  const _stateToValue = initialToValue ?? '';

  const [fromValue, setFromValue] = useState<string>(_stateFromValue);
  const [toValue, setToValue] = useState<string>(_stateToValue);

  const handleSetFrom = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const tarValue = e.target.value;

      if (toValue && +tarValue < +toValue) {
        return setFromValue(tarValue);
      }

      if (toValue && +tarValue > +toValue) {
        return setFromValue(toValue);
      }
    },
    [toValue],
  );

  const handleSetTo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const tarValue = e.target.value;

      if (fromValue && +tarValue > +fromValue) {
        return setToValue(tarValue);
      }

      if (fromValue && +tarValue < +fromValue) {
        return setToValue(fromValue);
      }
    },
    [fromValue],
  );

  const handleChangeFrom = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const tarValue = e.target.value;
    setFromValue(tarValue);
  }, []);

  const handleChangeTo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const tarValue = e.target.value;
    setToValue(tarValue);
  }, []);

  useEffect(() => {
    setToValue(_stateToValue);
  }, [_stateToValue]);

  useEffect(() => {
    setFromValue(_stateFromValue);
  }, [_stateFromValue]);

  useEffect(() => {
    handleSetValue('priceFrom', fromValue);
  }, [fromValue, handleSetValue]);

  useEffect(() => {
    handleSetValue('priceTo', toValue);
  }, [toValue, handleSetValue]);

  useEffect(() => {
    if (isReset) {
      setFromValue('');
      setToValue('');
    }
  }, [isReset]);

  return { fromValue, toValue, handleSetFrom, handleSetTo, handleChangeFrom, handleChangeTo };
};
