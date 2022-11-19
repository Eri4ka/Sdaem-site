import { NewsType } from '@utils/types';
import Card from '@views/Card';

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
        return <Card key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default NewsList;
