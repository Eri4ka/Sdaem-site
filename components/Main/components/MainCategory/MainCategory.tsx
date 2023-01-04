import { memo, useMemo } from 'react';

import { SectionType } from '@utils/types';

import MainCategoryCard from './components/MainCategoryCard';
import MainCategorySection from './components/MainCategorySection';
import styles from './MainCategory.module.scss';

type MainCategoryProps = {
  sections: SectionType;
};

const popular = [
  {
    alias: 'braslaskikh',
    content: 'Коттеджи и усадьбы на о. Брасласких',
    id: 1,
    title: 'Коттеджи и усадьбы на о. Брасласких',
  },
  {
    alias: 'narochi',
    content: 'Коттеджи и усадьбы (жилье) на Нарочи',
    id: 2,
    title: 'Коттеджи и усадьбы (жилье) на Нарочи',
  },
  {
    alias: 'onwater',
    content: 'Коттеджи и усадьбы (жилье) у воды, на\u00A0берегу, на озере',
    id: 3,
    title: 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере',
  },
];

const MainCategory: React.FC<MainCategoryProps> = ({ sections }) => {
  const { apartments, cottages } = sections;
  const sectionsKeys = Object.keys(sections) as Array<keyof typeof sections>;

  const renderCards = useMemo(() => {
    return sectionsKeys.map((item, i, arr) => {
      const firstItem = item === arr[0];
      const lastItem = item === arr[arr.length - 1];
      const cardSize =
        firstItem || lastItem
          ? styles['main-category__cards-card_wide']
          : styles['main-category__cards-card_short'];

      const categoryElems = item === 'apartments' ? apartments : null;

      return (
        <li key={i + item} className={`${styles['main-category__cards-card']} ${cardSize}`}>
          <MainCategoryCard category={item} categoryElems={categoryElems} />
        </li>
      );
    });
  }, [apartments, sectionsKeys]);

  return (
    <article className={styles['main-category']}>
      <ul className={`list ${styles['main-category__cards']}`}>{renderCards}</ul>
      <aside className={styles['main-category__sections']}>
        <MainCategorySection
          head='Квартиры'
          alias='apartaments'
          category={apartments}
          isSlice={false}
        />
        <MainCategorySection head='Коттеджы и усадьбы' alias='cottages' category={cottages} />
        <MainCategorySection
          head='Популярные направления'
          alias='cottages'
          category={popular}
          isSlice={false}
        />
      </aside>
    </article>
  );
};

export default memo(MainCategory);
