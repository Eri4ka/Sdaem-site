import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { getDescriptionSlice } from '@helpers/getDescriptionSlice';
import { NewsType } from '@mytypes/newsTypes';
import Button, { ButtonClass } from '@views/Button';

import styles from './NewsCard.module.scss';

type NewsCardProps = {
  data: NewsType;
};

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  const router = useRouter();
  const {
    title,
    description,
    images: { short },
    published,
    alias,
  } = data;
  const descriptionSliced = useMemo(() => getDescriptionSlice(description, 217), [description]);

  return (
    <li className={styles['news-card']} tabIndex={0}>
      <Image className={styles['news-card__image']} src={short} alt={title} priority={true} />
      <div className={styles['news-card__content']}>
        <h3 className={styles['news-card__head']}>{title}</h3>
        <div className={styles['news-card__text']}>{descriptionSliced}</div>
        <div className={styles['news-card__divider']}></div>
        <div className={styles['news-card__bottom']}>
          <div className={styles['news-card__date']}>{published}</div>
          <div className={styles['news-card__button']}>
            <Button className={ButtonClass.purp} onClick={() => router.push(`/news/${alias}`)}>
              Читать
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
