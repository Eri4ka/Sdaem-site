import Link from 'next/link';
import { memo, useMemo } from 'react';

import { clearURLQueries } from '@helpers/clearURLQueries';
import HomeIcon from '@icons/home.svg';

import styles from './BreadCrumbs.module.scss';

type Crumb = {
  path: string;
  title: string;
};

type BreadCrumbsProps = {
  crumbList: Crumb[];
  pathname: string;
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ crumbList, pathname }) => {
  const cleanPath = useMemo(() => clearURLQueries(pathname), [pathname]);

  return (
    <ul className={`list ${styles.breadcrumbs}`}>
      {crumbList.map(({ path, title }, i) => {
        if (i === 0) {
          return (
            <li key={i} className={styles.breadcrumbs__item}>
              <Link href={'/'}>
                <HomeIcon />
              </Link>
            </li>
          );
        }
        return (
          <li
            key={i}
            className={`${styles.breadcrumbs__item} ${
              cleanPath === path ? styles.breadcrumbs__item_active : ''
            }`}>
            <Link href={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(BreadCrumbs);
