import { useCallback } from 'react';

import styles from './FilterCheckBox.module.scss';

type FilterCheckBox = {
  label?: string;
  id: number;
  handleSetOptions: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
};

const FilterCheckBox: React.FC<FilterCheckBox> = ({ label, id, handleSetOptions, ...props }) => {
  const handleToggleOption = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSetOptions(e, id);
    },
    [handleSetOptions, id],
  );

  return (
    <>
      <input
        id={`${'checkbox'}${id}`}
        className={styles.checkbox}
        type='checkbox'
        onChange={handleToggleOption}
        {...props}
      />
      <label htmlFor={`${'checkbox'}${id}`} className={styles.checkbox__label}>
        {label}
      </label>
    </>
  );
};

export default FilterCheckBox;
