import Link from 'next/link';
import { memo } from 'react';

import styles from './MainCategorySectionItem.module.scss';

type MainCategorySectionItemProps = {
  title: string;
  total: number;
  href: string;
};

const MainCategorySectionItem: React.FC<MainCategorySectionItemProps> = ({
  title,
  total,
  href,
}) => {
  return (
    <li className={styles.item}>
      <span className={styles.item__title}>
        <Link href={href}>{title}</Link>
      </span>
      <span className={styles.item__total}>{total}</span>
    </li>
  );
};

export default memo(MainCategorySectionItem);
