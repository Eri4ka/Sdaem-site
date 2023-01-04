import Link from 'next/link';
import { memo, useMemo } from 'react';

import { getStringifyDate } from '@utils/helpers';

import styles from './MainNewsItem.module.scss';

type MainNewsItemProps = {
  title: string;
  date: string;
  href: string;
};

const MainNewsItem: React.FC<MainNewsItemProps> = ({ title, date, href }) => {
  const stringifiedDate = useMemo(() => getStringifyDate(date), [date]);

  return (
    <li className={styles['main-news__item']}>
      <Link href={`news/${href}`}>
        <p className={styles['main-news__text']}>{title}</p>
        <p className={styles['main-news__date']}>{stringifiedDate}</p>
      </Link>
    </li>
  );
};

export default memo(MainNewsItem);
