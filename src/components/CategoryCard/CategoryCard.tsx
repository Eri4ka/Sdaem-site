import { memo, useMemo } from 'react';

import apartmentsImg from '@images/main/category/apartments.png';
import automobileImg from '@images/main/category/automobile.png';
import bathsImg from '@images/main/category/baths.png';
import cottageImg from '@images/main/category/cottages.png';
import { SectionListType, SingleSectionType } from '@mytypes/sectionTypes';
import CategoryBadge from '@views/CategoryBadge';
import NextButton, { NextButtonClass } from '@views/NextButton';

import styles from './CategoryCard.module.scss';

type CategoryCardProps = {
  category: string;
  withCities: SectionListType;
  categoryElems?: SingleSectionType[] | null;
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

const CategoryCard: React.FC<CategoryCardProps> = ({ category, withCities, categoryElems }) => {
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
    if (category === withCities) {
      return (
        <div className={styles['category-card__wrapper']}>
          <p className={styles['category-card__description']}>{description}</p>
          <h2 className={styles['category-card__title']}>{title}</h2>
          <ul className={`list ${styles['category-card__badges']}`}>
            {categoryElems?.map(({ id, title, alias }) => {
              return <CategoryBadge key={id} title={title} href={`/${alias}`} />;
            })}
          </ul>
        </div>
      );
    }

    return (
      <>
        <p className={styles['category-card__description']}>{description}</p>
        <h2 className={styles['category-card__title']}>{title}</h2>
        <div className={styles['category-card__button']}>
          <NextButton className={NextButtonClass.white} />
        </div>
      </>
    );
  }, [category, categoryElems, description, title, withCities]);

  return (
    <div className={styles['category-card']} style={{ backgroundImage: `url(${image})` }}>
      {renderContent}
    </div>
  );
};

export default memo(CategoryCard);
