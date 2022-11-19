import Link from 'next/link';

import { ApartmentsType } from '@utils/types';

import styles from './Select.module.scss';

type SelectProps = {
  children: React.ReactNode;
  items: ApartmentsType[];
  visible: boolean;
  setVisible: () => void;
};

const Select: React.FC<SelectProps> = ({ children, items, visible, setVisible }) => {
  return (
    <div className={styles.select}>
      <div className={styles.select__title} onClick={setVisible}>
        {children}
      </div>
      <div className={`list ${styles.select__list}`}>
        {visible &&
          items.map(({ id, title, path }) => {
            return (
              <Link className={styles.select__link} href={path} key={id}>
                <div className={styles.select__item}>{title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Select;
