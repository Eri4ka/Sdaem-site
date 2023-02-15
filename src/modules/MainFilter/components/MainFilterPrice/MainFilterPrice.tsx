import { memo } from 'react';

import { useFromToValue } from '@hooks/useFromToValue';
import InputNumber from '@views/InputNumber';

import styles from './MainFilterPrice.module.scss';

type MainFilterPriceProps = {
  handleSetValue: (field: string, value: string) => void;
};

const MainFilterPrice: React.FC<MainFilterPriceProps> = ({ handleSetValue }) => {
  const { fromValue, toValue, handleSetFrom, handleSetTo, handleChangeFrom, handleChangeTo } =
    useFromToValue({ handleSetValue });

  return (
    <div className={styles['filter-price']}>
      <div className={styles['filter-price__wrapper']}>
        <InputNumber
          value={fromValue || ''}
          placeholder='От'
          onChange={handleChangeFrom}
          onBlur={handleSetFrom}
        />
      </div>
      <span className={styles['filter-price__separator']}>-</span>
      <div className={styles['filter-price__wrapper']}>
        <InputNumber
          value={toValue || ''}
          placeholder='До'
          onChange={handleChangeTo}
          onBlur={handleSetTo}
        />
      </div>
    </div>
  );
};

export default memo(MainFilterPrice);
