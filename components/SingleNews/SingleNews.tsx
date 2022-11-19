import Image from 'next/image';

import dots from '@public/images/dots.png';
import { useCrumbs } from '@utils/hooks/useCrumbs';
import { NewsType } from '@utils/types';
import BreadCrumbs from '@views/BreadCrumbs';

import SingleNewsIcons from './components/SingleNewsIcons';
import SingleNewsRelated from './components/SingleNewsRelated';
import styles from './SingleNews.module.scss';

type SingleNewsProps = {
  data: NewsType;
};

const SingleNews: React.FC<SingleNewsProps> = ({ data }) => {
  const { title, image, published, full_description } = data;
  const { asPath, getCrumbs } = useCrumbs({ title });

  return (
    <>
      <section className={styles['singlenews-head']}>
        <div className={styles['singlenews-head__container']}>
          <BreadCrumbs crumbList={getCrumbs} pathname={asPath} />
          <h1 className={styles['singlenews-head__head']}>{title}</h1>
          <div className={styles['singlenews-head__badges']}>
            <div className={styles['singlenews-head__date']}>{published}</div>
            <SingleNewsIcons />
          </div>
        </div>
      </section>
      <section className={styles['singlenews-content']}>
        <div className={styles['singlenews-content__container']}>
          <Image className={styles['singlenews-content__dots']} src={dots} alt='dots' />
          <div className={styles['singlenews-content__card']}>
            <Image className={styles['singlenews-content__image']} src={image} alt={title} />
            <div className={styles['singlenews-content__text']}>
              {full_description.map((item, i) => (
                <p key={i} className={styles['singlenews-content__paragraph']}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SingleNewsRelated />
    </>
  );
};

export default SingleNews;
