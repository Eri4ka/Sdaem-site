import { useCallback, useRef, memo, useMemo } from 'react';

import { useToggle } from '@hooks/useToggle';
import { SelectType } from '@mytypes/assistantTypes';

import styles from './Select.module.scss';

export enum SelectClass {
  filter = 'select__output_filter',
  slider = 'select__output_slider',
  sorting = 'select__output_sorting',
}

type SelectProps = {
  handleSelect: (value: string) => void;
  selectedValue: string;
  className: string;
  items: SelectType[];
  label?: string;
  icon?: React.ReactElement;
};

const Select: React.FC<SelectProps> = ({
  selectedValue,
  handleSelect,
  className,
  items,
  label = 'Выберите',
  icon,
}) => {
  const { toggle, handleToggle, triggerRef } = useToggle({});

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
    const value = selectedValue ? selectedValue : label;

    if (icon) {
      return (
        <div className={styles.select__label}>
          {icon}
          {value}
        </div>
      );
    }

    return value;
  }, [icon, label, selectedValue]);

  return (
    <div ref={triggerRef} className={styles.select}>
      <button
        ref={btnRef}
        className={clazz}
        onClick={handleButtonClick}
        type='button'
        aria-label='Selected value'>
        {renderValue}
      </button>
      {toggle && (
        <ul className={`list ${styles.select__list}`} role='menu'>
          {items?.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={styles.select__item}
                onClick={() => handleValueClick(title)}
                role='menuitem'
                tabIndex={0}>
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
