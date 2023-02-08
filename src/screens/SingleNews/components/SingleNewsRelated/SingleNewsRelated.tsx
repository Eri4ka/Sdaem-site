import { memo } from 'react';

import NewsCard from '@components/NewsCard';
import { NewsType } from '@mytypes/newsTypes';

import styles from './SingleNewsRelated.module.scss';

type SingleNewsRelatedProps = {
  similars: NewsType[];
};

const SingleNewsRelated: React.FC<SingleNewsRelatedProps> = ({ similars }) => {
  return (
    <section className={styles['singlenews-related']}>
      <div className={styles['singlenews-related__container']}>
        <h2 className={styles['singlenews-related__head']}>Читайте также</h2>
        <ul className={`list ${styles['singlenews-related__list']}`}>
          {similars.map((item) => (
            <NewsCard key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(SingleNewsRelated);
