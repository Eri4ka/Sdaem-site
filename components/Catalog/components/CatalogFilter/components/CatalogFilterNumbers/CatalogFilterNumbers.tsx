import { memo } from 'react';

import { useFromToValue } from '@utils/hooks/useFromToValue';
import FilterNumber from '@views/Filter/FilterNumber';

import styles from './CatalogFilterNumbers.module.scss';

type CatalogFilterNumbersProps = {
  initialFromValue: string;
  initialToValue: string;
  handleSetValue: (field: string, value: string) => void;
  isReset?: boolean;
};

const CatalogFilterNumbers: React.FC<CatalogFilterNumbersProps> = ({
  initialFromValue,
  initialToValue,
  handleSetValue,
  isReset,
}) => {
  const { fromValue, toValue, handleSetFrom, handleSetTo, handleChangeFrom, handleChangeTo } =
    useFromToValue({ initialFromValue, initialToValue, isReset, handleSetValue });

  return (
    <div className={styles.numbers}>
      <div className={styles.numbers__wrapper}>
        <FilterNumber
          value={fromValue || ''}
          placeholder='От'
          onChange={handleChangeFrom}
          onBlur={handleSetFrom}
        />
      </div>
      <span className={styles.numbers__separator}>-</span>
      <div className={styles.numbers__wrapper}>
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

export default memo(CatalogFilterNumbers);
