import { useState, useCallback } from 'react';

export const useFromToValue = () => {
  const [fromValue, setFromValue] = useState<string>();
  const [toValue, setToValue] = useState<string>();

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

  return { fromValue, toValue, handleSetFrom, handleSetTo, handleChangeFrom, handleChangeTo };
};
