import { memo, useMemo } from 'react';

import apartmentsImg from '@public/images/main/category/apartments.png';
import automobileImg from '@public/images/main/category/automobile.png';
import bathsImg from '@public/images/main/category/baths.png';
import cottageImg from '@public/images/main/category/cottages.png';
import { SingleSectionType } from '@utils/types';
import NextButton, { NextButtonClass } from '@views/Buttons/NextButton';

import MainCategoryBadge from '../MainCategoryBadge';
import styles from './MainCategoryCard.module.scss';
type MainCategoryCardProps = {
  category: string;
  categoryElems: SingleSectionType[] | null;
};

type categoryInfoType = {
  title?: string;
  description?: string;
  image?: string;
};

const apartments = {
  title: 'Квартиры на сутки',
  description: 'Снять квартиру',
  image: apartmentsImg.src,
};

const cottages = {
  title: 'Коттеджи и усадьбы',
  description: 'Снять коттедж на праздник',
  image: cottageImg.src,
};

const baths = {
  title: 'Бани и сауны',
  description: 'Попариться в бане с друзьями',
  image: bathsImg.src,
};

const automobile = {
  title: 'Авто на прокат',
  description: 'Если срочно нужна машина',
  image: automobileImg.src,
};

const MainCategoryCard: React.FC<MainCategoryCardProps> = ({ category, categoryElems }) => {
  let categoryInfo: categoryInfoType = {};

  switch (category) {
    case 'apartments':
      categoryInfo = apartments;
      break;
    case 'cottages':
      categoryInfo = cottages;
      break;
    case 'baths':
      categoryInfo = baths;
      break;
    case 'automobile':
      categoryInfo = automobile;
      break;
    default:
      categoryInfo;
  }

  const { title, description, image } = categoryInfo;

  const renderContent = useMemo(() => {
    if (category === 'apartments') {
      return (
        <div className={styles['main-category-card__wrapper']}>
          <p className={styles['main-category-card__description']}>{description}</p>
          <h2 className={styles['main-category-card__title']}>{title}</h2>
          <ul className={`list ${styles['main-category-card__badges']}`}>
            {categoryElems?.map(({ id, title, alias }) => {
              return <MainCategoryBadge key={id} title={title} href={`${category}/${alias}`} />;
            })}
          </ul>
        </div>
      );
    }

    return (
      <>
        <p className={styles['main-category-card__description']}>{description}</p>
        <h2 className={styles['main-category-card__title']}>{title}</h2>
        <div className={styles['main-category-card__button']}>
          <NextButton className={NextButtonClass.white} />
        </div>
      </>
    );
  }, [category, categoryElems, description, title]);

  return (
    <div className={styles['main-category-card']} style={{ backgroundImage: `url(${image})` }}>
      {renderContent}
    </div>
  );
};

export default memo(MainCategoryCard);
