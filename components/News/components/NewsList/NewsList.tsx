import { NewsType } from '@utils/types';
import NewsCard from '@views/Card/NewsCard';

import styles from './NewsList.module.scss';

type NewsListProps = {
  data: NewsType[];
  firstContentIndex: number;
  lastContentIndex: number;
};

const NewsList: React.FC<NewsListProps> = ({ data, firstContentIndex, lastContentIndex }) => {
  return (
    <ul className={`list ${styles['news-list']}`}>
      {data.slice(firstContentIndex, lastContentIndex).map((item) => {
        return <NewsCard key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default NewsList;
