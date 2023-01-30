import Link from 'next/link';
import { memo } from 'react';

import ArrowIc from '@icons/button/arrow.svg';
import { NewsType } from '@mytypes/newsTypes';

import NewsBlockItem from '../NewsBlockItem';
import styles from './NewsBlock.module.scss';

type NewsBlockProps = {
  news: NewsType[];
};

const NewsBlock: React.FC<NewsBlockProps> = ({ news }) => {
  return (
    <aside className={styles['news-block']}>
      <h2 className={styles['news-block__heading']}>Новости</h2>
      <ul className={`list ${styles['news-block__list']}`}>
        {news.map(({ id, title, alias, published_date }) => (
          <NewsBlockItem key={id} title={title} date={published_date} href={alias} />
        ))}
      </ul>
      <Link href='/news' className={styles['news-block__link']}>
        <p className={styles['news-block__link-text']}>Посмотреть все</p>
        <ArrowIc />
      </Link>
    </aside>
  );
};

export default memo(NewsBlock);
