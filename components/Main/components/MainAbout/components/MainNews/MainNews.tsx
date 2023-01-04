import Link from 'next/link';
import { memo } from 'react';

import ArrowIc from '@public/icons/button/arrow.svg';
import { NewsType } from '@utils/types';

import MainNewsItem from '../MainNewsItem';
import styles from './MainNews.module.scss';

type MainNewsProps = {
  news: NewsType[];
};

const MainNews: React.FC<MainNewsProps> = ({ news }) => {
  return (
    <aside className={styles['main-news']}>
      <h2 className={styles['main-news__heading']}>Новости</h2>
      <ul className={`list ${styles['main-news__list']}`}>
        {news.map(({ id, title, alias, published_date }) => (
          <MainNewsItem key={id} title={title} date={published_date} href={alias} />
        ))}
      </ul>
      <Link href='/news' className={styles['main-news__link']}>
        <p className={styles['main-news__link-text']}>Посмотреть все</p>
        <ArrowIc />
      </Link>
    </aside>
  );
};

export default memo(MainNews);
