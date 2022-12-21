import Link from 'next/link';
import { memo } from 'react';

import styles from './MainCategoryBadge.module.scss';

type MainCategoryBadgeProps = {
  title: string;
  href: string;
};

const MainCategoryBadge: React.FC<MainCategoryBadgeProps> = ({ title, href }) => {
  return (
    <li className={styles['main-category-badge']}>
      <Link href={href} className={styles['main-category-badge__link']}>
        {title}
      </Link>
    </li>
  );
};

export default memo(MainCategoryBadge);
