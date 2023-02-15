import Link from 'next/link';
import { memo, useMemo } from 'react';

import { getStringifyDate } from '../../helpers/getStringifyDate';
import styles from './NewsBlockItem.module.scss';

type NewsBlockItemProps = {
  title: string;
  date: string;
  href: string;
};

const NewsBlockItem: React.FC<NewsBlockItemProps> = ({ title, date, href }) => {
  const stringifiedDate = useMemo(() => getStringifyDate(date), [date]);

  return (
    <li className={styles['news-block__item']}>
      <Link href={`news/${href}`}>
        <p className={styles['news-block__text']}>{title}</p>
        <p className={styles['news-block__date']}>{stringifiedDate}</p>
      </Link>
    </li>
  );
};

export default memo(NewsBlockItem);
