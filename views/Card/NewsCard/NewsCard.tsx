import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { getDescriptionSlice } from '@utils/helpers';
import { NewsType } from '@utils/types/types';
import Button, { ButtonClass } from '@views/Buttons/Button';

import styles from './NewsCard.module.scss';

type NewsCardProps = {
  data: NewsType;
};

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  const router = useRouter();
  const { title, description, image, published, alias } = data;

  const descriptionSliced = useMemo(() => getDescriptionSlice(description, 217), [description]);

  return (
    <li className={styles['news-card']}>
      <Image className={styles['news-card__image']} src={image} alt={title} priority={true} />
      <div className={styles['news-card__content']}>
        <div className={styles['news-card__head']}>{title}</div>
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
