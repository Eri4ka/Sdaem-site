import Image from 'next/image';
import { memo, useMemo } from 'react';

import { getDescriptionSlice } from '@utils/helpers';
import { ApartmentsType } from '@utils/types';

import Badge from '../Badge';
import CardContacts from '../CardContacts';
import CardInfo from '../CardInfo';
import CardSlider from '../CardSlider';
import CardTag from '../CardTag';
import Favorite from '../Favorite';
import Tag from '../Tag';
import styles from './ShortCard.module.scss';

type ShortCardProps = {
  catalog?: boolean;
  item: ApartmentsType;
};

const ShortCard: React.FC<ShortCardProps> = ({ catalog, item }) => {
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
    <div className={styles['short-card']}>
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
        <div
          className={`${styles['short-card__content-description']} ${
            catalog ? styles['short-card__content-description_tall'] : ''
          }`}>
          {descriptionSliced}
        </div>
      </div>
      <div className={styles['short-card__bottom']}>
        <div className={styles['short-card__bottom-wrapper']}>
          {catalog && <Favorite />}
          <CardContacts contacts={contacts} catalog={catalog} />
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(ShortCard);
