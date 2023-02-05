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

import styles from './ShortCard.module.scss';

type ShortCardProps = {
  catalog?: boolean;
  item: ApartmentsType;
  handleToggleFavorite?: () => void;
  isFavorite?: boolean;
};

const ShortCard: React.FC<ShortCardProps> = ({
  catalog,
  item,
  handleToggleFavorite,
  isFavorite,
}) => {
  const {
    adress,
    district,
    metro,
    price,
    description,
    rooms: { count, type },
    square,
    images,
    tag,
    contacts,
  } = item;

  const descriptionSliced = useMemo(() => getDescriptionSlice(description, 188), [description]);

  const renderImage = useMemo(() => {
    if (images.length > 1) {
      return (
        <CardSlider>
          {images.map((item, i) => (
            <div key={i} className={styles['short-card__image']}>
              <Image src={item.short} placeholder='blur' priority alt='apartment' />
              {tag && <CardTag text={tag} />}
            </div>
          ))}
        </CardSlider>
      );
    }
    return (
      <div className={styles['short-card__image']}>
        <Image src={images[0].short} placeholder='blur' priority alt='apartment' />
        {tag && <CardTag text={tag} />}
      </div>
    );
  }, [images, tag]);

  return (
    <div className={styles['short-card']} datatype='card'>
      {renderImage}
      <div className={styles['short-card__content']}>
        <div className={styles['short-card__content-top']}>
          <div className={styles['short-card__price']}>
            <span className={styles['short-card__price-value']}>{price} BYN</span>
            <span className={styles['short-card__price-text']}>за сутки</span>
          </div>
          <div className={styles['short-card__content-badges']}>
            <Badge type='roomsType' text={type} />
            <Badge text={count} />
            {!catalog && <Badge text={`${square} м²`} />}
          </div>
        </div>
        <div className={styles['short-card__content-tags']}>
          <Tag type='adress' text={adress} />
          <Tag type='metro' text={metro} />
          <Tag type='district' text={district} />
        </div>
        <div className={styles['short-card__content-description']}>{descriptionSliced}</div>
      </div>
      <div className={styles['short-card__bottom']}>
        <div className={styles['short-card__bottom-wrapper']}>
          {catalog && <Favorite onClick={handleToggleFavorite} isFavorite={isFavorite} />}
          <CardContacts contacts={contacts} catalog={catalog} />
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(ShortCard);
