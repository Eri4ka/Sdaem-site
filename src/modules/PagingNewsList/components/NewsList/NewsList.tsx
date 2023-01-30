import { memo } from 'react';

import NewsCard from '@components/NewsCard';
import NotFoundItems from '@components/NotFoundItems';
import { NewsType } from '@mytypes/newsTypes';

import styles from './NewsList.module.scss';

type NewsListProps = {
  news: NewsType[];
  firstContentIndex: number;
  lastContentIndex: number;
};

const NewsList: React.FC<NewsListProps> = ({ news, firstContentIndex, lastContentIndex }) => {
  if (news.length === 0) {
    return <NotFoundItems />;
  }

  return (
    <ul className={`list ${styles['news-list']}`}>
      {news.slice(firstContentIndex, lastContentIndex).map((item) => {
        return <NewsCard key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default memo(NewsList);
