import { useCallback, useRef, memo, useMemo } from 'react';

import { useSelectValue } from '@utils/hooks/useSelectValue';
import { useToggle } from '@utils/hooks/useToggle';
import { SelectType } from '@utils/types';

import styles from './Select.module.scss';

export enum SelectClass {
  filter = 'select__output_filter',
  slider = 'select__output_slider',
}

type SelectProps = {
  handleSetValue: (field: string, value: string) => void;
  className: string;
  items?: SelectType[];
  name: string;
  label?: string;
  icon?: React.ReactElement;
};

const Select: React.FC<SelectProps> = ({
  handleSetValue,
  className,
  items,
  name,
  label = 'Выберите',
  icon,
}) => {
  const { toggle, handleToggle, triggerRef } = useToggle({});
  const { selectValue, handleSelect } = useSelectValue({ handleSetValue, name });
  const btnRef = useRef<HTMLButtonElement>(null);

  // ref for Safari and Firebox
  const handleButtonClick = useCallback(() => {
    if (btnRef.current) {
      btnRef.current.focus();
    }
    handleToggle();
  }, [handleToggle]);

  const clazz = `${styles.select__output} ${styles[className]} ${
    toggle ? styles.select__output_show : ''
  }`;

  const renderValue = useMemo(() => {
    const value = selectValue ? selectValue : label;

    if (icon) {
      return (
        <div>
          {icon}
          {value}
        </div>
      );
    }

    return value;
  }, [icon, label, selectValue]);

  return (
    <div ref={triggerRef} className={styles.select}>
      <button ref={btnRef} className={clazz} onClick={handleButtonClick}>
        {renderValue}
      </button>
      {toggle && (
        <ul className={`list ${styles.select__list}`}>
          {items?.map(({ id, title }) => {
            return (
              <li key={id} className={styles.select__item} onClick={() => handleSelect(title)}>
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default memo(Select);
