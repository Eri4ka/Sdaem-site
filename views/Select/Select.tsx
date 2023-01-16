import { useCallback, useRef, memo, useMemo } from 'react';

import { useSelectValue } from '@utils/hooks/useSelectValue';
import { useToggle } from '@utils/hooks/useToggle';
import { SelectType } from '@utils/types';

import styles from './Select.module.scss';

export enum SelectClass {
  filter = 'select__output_filter',
  slider = 'select__output_slider',
  sorting = 'select__output_sorting',
}

type SelectProps = {
  initialValue?: string;
  handleSetValue: (field: string, value: string) => void;
  isReset?: boolean;
  className: string;
  items?: SelectType[];
  name: string;
  label?: string;
  icon?: React.ReactElement;
};

const Select: React.FC<SelectProps> = ({
  initialValue,
  handleSetValue,
  isReset,
  className,
  items,
  name,
  label = 'Выберите',
  icon,
}) => {
  const { toggle, handleToggle, triggerRef } = useToggle({});
  const { selectValue, handleSelect } = useSelectValue({
    initialValue,
    handleSetValue,
    name,
    isReset,
  });
  const btnRef = useRef<HTMLButtonElement>(null);

  // ref for Safari and Firefox
  const handleButtonClick = useCallback(() => {
    if (btnRef.current) {
      btnRef.current.focus();
    }
    handleToggle();
  }, [handleToggle]);

  const handleValueClick = useCallback(
    (title: string) => {
      handleSelect(title);
      handleToggle();
    },
    [handleSelect, handleToggle],
  );

  const clazz = `${styles.select__output} ${styles[className]} ${
    toggle ? styles.select__output_show : ''
  }`;

  const renderValue = useMemo(() => {
    const value = selectValue ? selectValue : label;

    if (icon) {
      return (
        <div className={styles.select__label}>
          {icon}
          {value}
        </div>
      );
    }

    return value;
  }, [icon, label, selectValue]);

  return (
    <div ref={triggerRef} className={styles.select}>
      <button ref={btnRef} className={clazz} onClick={handleButtonClick} type='button'>
        {renderValue}
      </button>
      {toggle && (
        <ul className={`list ${styles.select__list}`}>
          {items?.map(({ id, title }) => {
            return (
              <li key={id} className={styles.select__item} onClick={() => handleValueClick(title)}>
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
