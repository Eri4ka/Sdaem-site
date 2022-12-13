import { NewsType } from '@utils/types';
import Card from '@views/Card';

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
            <Card key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleNewsRelated;
