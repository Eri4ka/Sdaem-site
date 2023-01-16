import Image from 'next/image';
import { useMemo } from 'react';

import { getDescriptionSlice } from '@utils/helpers';
import { ApartmentsType } from '@utils/types';

import Badge from '../Badge';
import CardContacts from '../CardContacts';
import CardInfo from '../CardInfo';
import CardSlider from '../CardSlider';
import CardTag from '../CardTag';
import Favorite from '../Favorite';
import Tag from '../Tag';
import styles from './WideCard.module.scss';

type WideCardProps = {
  item: ApartmentsType;
};

const WideCard: React.FC<WideCardProps> = ({ item }) => {
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
            <Favorite wide />
          </div>
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default WideCard;
