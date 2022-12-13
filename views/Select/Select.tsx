import Link from 'next/link';

import styles from './Select.module.scss';

type SelectProps<T> = {
  children: React.ReactNode;
  items: T[];
  visible: boolean;
  setVisible: () => void;
};

const Select = <T,>({ children, items, visible, setVisible }: SelectProps<T>) => {
  return (
    <div className={styles.select}>
      <div className={styles.select__title} onClick={setVisible}>
        {children}
      </div>
      <div className={styles.select__list}>
        {visible &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          items.map((item: any) => {
            return (
              <Link className={styles.select__link} href={item.path} key={item.id}>
                <div className={styles.select__item}>{item.title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Select;
