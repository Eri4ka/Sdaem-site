import Link from 'next/link';
import { memo } from 'react';

import styles from './CategorySectionItem.module.scss';

type CategorySectionItemProps = {
  title: string;
  total?: number;
  href: string;
};

const CategorySectionItem: React.FC<CategorySectionItemProps> = ({ title, total, href }) => {
  const totalCount = total ?? 0;

  return (
    <li className={styles.item}>
      <span className={styles.item__title}>
        <Link href={href}>{title}</Link>
      </span>
      {totalCount >= 0 && <span className={styles.item__total}>{total}</span>}
    </li>
  );
};

export default memo(CategorySectionItem);
