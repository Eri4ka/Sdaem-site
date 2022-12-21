import { memo, useMemo } from 'react';

import { SectionType } from '@utils/types';

import MainCategoryCard from './components/MainCategoryCard';
import MainCategorySection from './components/MainCategorySection';
import styles from './MainCategory.module.scss';

type MainCategoryProps = {
  sections: SectionType;
};

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
    <section className={styles['main-category']}>
      <ul className={`list ${styles['main-category__cards']}`}>{renderCards}</ul>
      <aside className={styles['main-category__sections']}>
        <MainCategorySection
          head='Квартиры'
          alias='apartaments'
          category={apartments}
          isSlice={false}
        />
        <MainCategorySection head='Коттеджы и усадьбы' alias='cottages' category={cottages} />
      </aside>
    </section>
  );
};

export default memo(MainCategory);
