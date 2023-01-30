import { memo } from 'react';

import { useOptionsValue } from '@hooks/useOptionsValue';

import styles from './CheckBox.module.scss';

type CheckBoxProps = {
  initialValue?: boolean;
  label?: string;
  field: string;
  handleSetValue: (field: string, value: boolean) => void;
  isReset?: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({
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

export default memo(CheckBox);
