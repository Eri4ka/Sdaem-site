import Image from 'next/image';
import { useRouter } from 'next/router';

import { NewsType } from '@utils/types/types';
import Button, { ButtonClass } from '@views/Button';

import styles from './Card.module.scss';

type CardType = {
  data: NewsType;
};

const Card: React.FC<CardType> = ({ data }) => {
  const router = useRouter();
  const { title, description, image, published, alias } = data;

  const textSlice = (text: string) => {
    return text.length > 217 ? text.slice(0, 218) + '...' : text;
  };

  const slicedText = textSlice(description);

  return (
    <li className={styles['news-card']}>
      <Image className={styles['news-card__image']} src={image} alt={title} priority={true} />
      <div className={styles['news-card__content']}>
        <div className={styles['news-card__head']}>{title}</div>
        <div className={styles['news-card__text']}>{slicedText}</div>
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

export default Card;
