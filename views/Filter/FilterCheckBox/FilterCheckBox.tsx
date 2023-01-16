import { memo } from 'react';

import { useOptionsValue } from '@utils/hooks/useOptionsValue';

import styles from './FilterCheckBox.module.scss';

type FilterCheckBox = {
  initialValue?: boolean;
  label?: string;
  field: string;
  handleSetValue: (field: string, value: boolean) => void;
  isReset?: boolean;
};

const FilterCheckBox: React.FC<FilterCheckBox> = ({
  initialValue,
  label,
  field,
  handleSetValue,
  isReset,
  ...props
}) => {
  const { checked, handleToggleOption } = useOptionsValue({
    initialValue,
    handleSetValue,
    field,
    isReset,
  });

  return (
    <div>
      <input
        id={`${'checkbox'}${field}`}
        className={styles.checkbox}
        type='checkbox'
        onChange={handleToggleOption}
        checked={checked}
        {...props}
      />
      <label htmlFor={`${'checkbox'}${field}`} className={styles.checkbox__label}>
        {label}
      </label>
    </div>
  );
};

export default memo(FilterCheckBox);
