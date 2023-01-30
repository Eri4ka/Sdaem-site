import Link from 'next/link';
import { memo } from 'react';

import styles from './CategoryBadge.module.scss';

type CategoryBadgeProps = {
  title: string;
  href: string;
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ title, href }) => {
  return (
    <li className={styles['category-badge']}>
      <Link href={href} className={styles['category-badge__link']}>
        {title}
      </Link>
    </li>
  );
};

export default memo(CategoryBadge);
