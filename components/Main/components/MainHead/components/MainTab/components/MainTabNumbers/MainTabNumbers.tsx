import { memo, useEffect } from 'react';

import { useFromToValue } from '@utils/hooks/useFromToValue';
import FilterNumber from '@views/Filter/FilterNumber';

import styles from './MainTabNumbers.module.scss';

type MainTabNumbersProps = {
  handleSetValue: (field: string, value: string | number | any) => void;
};

const MainTabNumbers: React.FC<MainTabNumbersProps> = ({ handleSetValue }) => {
  const { fromValue, toValue, handleSetFrom, handleSetTo, handleChangeFrom, handleChangeTo } =
    useFromToValue();

  useEffect(() => {
    handleSetValue('priceFrom', fromValue);
  }, [fromValue, handleSetValue]);

  useEffect(() => {
    handleSetValue('priceTo', toValue);
  }, [toValue, handleSetValue]);

  return (
    <div className={styles['main-tab__numbers']}>
      <div className={styles['main-tab__numbers-wrapper']}>
        <FilterNumber
          value={fromValue || ''}
          placeholder='От'
          onChange={handleChangeFrom}
          onBlur={handleSetFrom}
        />
      </div>
      <span className={styles['main-tab__numbers-separator']}>-</span>
      <div className={styles['main-tab__numbers-wrapper']}>
        <FilterNumber
          value={toValue || ''}
          placeholder='До'
          onChange={handleChangeTo}
          onBlur={handleSetTo}
        />
      </div>
    </div>
  );
};

export default memo(MainTabNumbers);
