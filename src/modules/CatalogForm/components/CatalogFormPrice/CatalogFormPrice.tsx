import { memo } from 'react';

import { useFromToValue } from '@utils/hooks/useFromToValue';
import InputNumber from '@views/InputNumber';

import styles from './CatalogFormPrice.module.scss';

type CatalogFormPriceProps = {
  initialFromValue: string;
  initialToValue: string;
  handleSetValue: (field: string, value: string) => void;
  isReset: boolean;
};

const CatalogFormPrice: React.FC<CatalogFormPriceProps> = ({
  initialFromValue,
  initialToValue,
  handleSetValue,
  isReset,
}) => {
  const { fromValue, toValue, handleSetFrom, handleSetTo, handleChangeFrom, handleChangeTo } =
    useFromToValue({ initialFromValue, initialToValue, isReset, handleSetValue });

  return (
    <div className={styles['form-price']}>
      <div className={styles['form-price__wrapper']}>
        <InputNumber
          value={fromValue || ''}
          placeholder='От'
          onChange={handleChangeFrom}
          onBlur={handleSetFrom}
        />
      </div>
      <span className={styles['form-price__separator']}>-</span>
      <div className={styles['form-price__wrapper']}>
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

export default memo(CatalogFormPrice);
