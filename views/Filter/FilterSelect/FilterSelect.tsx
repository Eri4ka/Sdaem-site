import { useEffect, useState, useCallback } from 'react';

import { useToggle } from '@utils/hooks/useToggle';
import { SelectType } from '@utils/types';

import styles from './FilterSelect.module.scss';

type FilterSelectProps = {
  handleSetValue: (field: string, value: string) => void;
  items?: SelectType[];
  name: string;
};

const FilterSelect: React.FC<FilterSelectProps> = ({ handleSetValue, items, name }) => {
  const { toggle, handleToggle, triggerRef } = useToggle({});
  const [selectValue, setSelectValue] = useState<string>('');

  const handleSelect = useCallback(
    (value: string) => {
      if (selectValue === value) {
        return setSelectValue('');
      }
      setSelectValue(value);
    },
    [selectValue],
  );

  useEffect(() => {
    handleSetValue(name, selectValue);
  }, [name, handleSetValue, selectValue]);

  return (
    <div ref={triggerRef} className={styles['filter-select']}>
      <button
        className={`${styles['filter-select__output']} ${
          toggle ? styles['filter-select__output_show'] : ''
        }`}
        onClick={handleToggle}>
        {selectValue ? selectValue : 'Выберите'}
      </button>
      {toggle && (
        <ul className={`list ${styles['filter-select__list']}`}>
          {items?.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={styles['filter-select__item']}
                onClick={() => handleSelect(title)}>
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
