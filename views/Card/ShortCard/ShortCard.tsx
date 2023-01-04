import Image from 'next/image';
import { memo, useMemo } from 'react';

import { ApartmentsType } from '@utils/types';

import Badge from '../Badge';
import CardContacts from '../CardContacts';
import CardInfo from '../CardInfo';
import CardTag from '../CardTag';
import Tag from '../Tag';
import styles from './ShortCard.module.scss';

type ShortCardProps = {
  item: ApartmentsType;
};

const ShortCard: React.FC<ShortCardProps> = ({ item }) => {
  const {
    adress,
    district,
    metro,
    price,
    description,
    rooms: { count, type },
    square,
    image,
    tag,
    contacts,
  } = item;

  const descriptionSlice = useMemo(() => {
    return description.length > 188 ? description.slice(0, 189) + '...' : description;
  }, [description]);

  return (
    <div className={styles['short-card']}>
      <div className={styles['short-card__image']}>
        <Image src={image} placeholder='blur' priority alt='apartment' />
        {tag && <CardTag text={tag} />}
      </div>
      <div className={styles['short-card__content']}>
        <div className={styles['short-card__content-top']}>
          <div className={styles['short-card__price']}>
            <span className={styles['short-card__price-value']}>{price} BYN</span>
            <span className={styles['short-card__price-text']}>за сутки</span>
          </div>
          <div className={styles['short-card__content-badges']}>
            <Badge roomsType text={type} />
            <Badge text={`${count} комн.`} />
            <Badge text={`${square} м²`} />
          </div>
        </div>
        <div className={styles['short-card__content-tags']}>
          <Tag type='adress' text={adress} />
          <Tag type='metro' text={metro} />
          <Tag type='district' text={district} />
        </div>
        <div className={styles['short-card__content-description']}>{descriptionSlice}</div>
      </div>
      <div className={styles['short-card__bottom']}>
        <div className={styles['short-card__bottom-wrapper']}>
          <CardContacts contacts={contacts} />
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(ShortCard);
