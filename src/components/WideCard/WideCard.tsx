import Image from 'next/image';
import { memo, useMemo } from 'react';

import CardContacts from '@components/CardContacts';
import CardSlider from '@components/CardSlider';
import { getDescriptionSlice } from '@helpers/getDescriptionSlice';
import { ApartmentsType } from '@mytypes/productTypes';
import Badge from '@views/Badge';
import CardInfo from '@views/CardInfo';
import CardTag from '@views/CardTag';
import Favorite from '@views/Favorite';
import Tag from '@views/Tag';

import styles from './WideCard.module.scss';

type WideCardProps = {
  item: ApartmentsType;
  handleToggleFavorite: () => void;
  isFavorite?: boolean;
  route: string;
};

const WideCard: React.FC<WideCardProps> = ({ item, handleToggleFavorite, isFavorite, route }) => {
  const {
    adress,
    district,
    metro,
    price,
    description,
    rooms: { count, type },
    title,
    images,
    tag,
    contacts,
  } = item;

  const descriptionSliced = useMemo(() => getDescriptionSlice(description, 260), [description]);

  const renderImage = useMemo(() => {
    if (images.length > 1) {
      return (
        <div className={styles['wide-card__slider']}>
          <CardSlider>
            {images.map((item, i) => (
              <div key={i} className={styles['wide-card__image']}>
                <Image
                  src={item.wide}
                  placeholder='blur'
                  priority
                  alt='apartment'
                  fill
                  sizes='(max-width: 538px) 100vw,
              (max-height: 300px) 100vw'
                  style={{ objectFit: 'contain' }}
                />
                {tag && <CardTag text={tag} />}
              </div>
            ))}
          </CardSlider>
        </div>
      );
    }
    return (
      <div className={styles['wide-card__image']}>
        <Image
          src={images[0].wide}
          placeholder='blur'
          priority
          alt='apartment'
          fill
          sizes='(max-width: 538px) 100vw,
              (max-height: 300px) 100vw'
          style={{ objectFit: 'contain' }}
        />
        {tag && <CardTag text={tag} />}
      </div>
    );
  }, [images, tag]);

  return (
    <div className={styles['wide-card']}>
      {renderImage}
      <div className={styles['wide-card__content']}>
        <div className={styles['wide-card__content-top']}>
          <div className={styles['wide-card__head']}>
            <p className={styles['wide-card__head-title']}>{title}</p>
            <Tag type='adress' text={adress} wide />
          </div>
          <div className={styles['wide-card__price']}>
            <span className={styles['wide-card__price-value']}>{price} BYN</span>
            <span className={styles['wide-card__price-text']}>за сутки</span>
          </div>
        </div>
        <div className={styles['wide-card__content-badges']}>
          <Badge type='roomsType' text={type} wide />
          <Badge text={count} wide />
          <Badge type='metro' text={metro} wide />
          <Badge type='district' text={district} wide />
        </div>
        <div className={`${styles['wide-card__content-description']}`}>{descriptionSliced}</div>
        <div className={styles['wide-card__bottom']}>
          <div className={styles['wide-card__bottom-left']}>
            <CardContacts contacts={contacts} />
            <Favorite wide onClick={handleToggleFavorite} isFavorite={isFavorite} />
          </div>
          <CardInfo href={route} />
        </div>
      </div>
    </div>
  );
};

export default memo(WideCard);
