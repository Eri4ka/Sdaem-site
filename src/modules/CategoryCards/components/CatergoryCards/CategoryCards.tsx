import { useMemo, memo } from 'react';

import CategoryCard from '@components/CategoryCard';
import { SectionListType, SectionType } from '@mytypes/sectionTypes';

import styles from './CategoryCards.module.scss';

type CategoryCardsProps = {
  sections: SectionType;
  withCities: SectionListType;
};

const CategoryCards: React.FC<CategoryCardsProps> = ({ sections, withCities }) => {
  const sectionsKeys = Object.keys(sections) as Array<keyof typeof sections>;

  const renderCards = useMemo(() => {
    return sectionsKeys.map((item, i, arr) => {
      const firstItem = item === arr[0];
      const lastItem = item === arr[arr.length - 1];
      const cardSize =
        firstItem || lastItem
          ? styles['category__cards-card_wide']
          : styles['category__cards-card_short'];

      const categoryElems = item === withCities ? sections[withCities] : null;

      return (
        <li key={i + item} className={`${styles['category__cards-card']} ${cardSize}`}>
          <CategoryCard category={item} withCities={withCities} categoryElems={categoryElems} />
        </li>
      );
    });
  }, [sections, withCities, sectionsKeys]);

  return <ul className={`list ${styles.category__cards}`}>{renderCards}</ul>;
};

export default memo(CategoryCards);
