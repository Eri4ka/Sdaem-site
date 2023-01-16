import Link from 'next/link';
import { memo } from 'react';

import { SingleSectionType } from '@utils/types';

import styles from './HeaderSelect.module.scss';

type HeaderSelectProps = {
  children: React.ReactNode;
  items: SingleSectionType[];
  visible: boolean;
  setVisible: () => void;
};

const HeaderSelect: React.FC<HeaderSelectProps> = ({ children, items, visible, setVisible }) => {
  return (
    <div className={styles['header-select']}>
      <div className={styles['header-select__title']} onClick={setVisible}>
        {children}
      </div>
      <div className={styles['header-select__list']}>
        {visible &&
          items.map(({ id, content, alias }) => {
            return (
              <Link className={styles['header-select__link']} href={`/${alias}`} key={id}>
                <div className={styles['header-select__item']}>{content}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default memo(HeaderSelect);
