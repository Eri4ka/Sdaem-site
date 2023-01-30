import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';

import dots from '@images/dots.png';

import styles from './SingleNewsContent.module.scss';

type SingleNewsContentProps = {
  image: StaticImageData;
  full_description: string[];
};

const SingleNewsContent: React.FC<SingleNewsContentProps> = ({ image, full_description }) => {
  return (
    <article className={styles['singlenews-content']}>
      <div className={styles['singlenews-content__container']}>
        <Image className={styles['singlenews-content__dots']} src={dots} alt='dots' priority />
        <div className={styles['singlenews-content__card']}>
          <Image
            className={styles['singlenews-content__image']}
            src={image}
            alt='news-image'
            priority
          />
          <div className={styles['singlenews-content__text']}>
            {full_description.map((item, i) => (
              <p key={i} className={styles['singlenews-content__paragraph']}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(SingleNewsContent);
