import { memo } from 'react';

import CategoryCards from '@modules/CategoryCards';
import { SectionType } from '@mytypes/sectionTypes';

import MainCategorySections from '../MainCategorySections';
import styles from './MainCategory.module.scss';

type MainCategoryProps = {
  sections: SectionType;
};

const MainCategory: React.FC<MainCategoryProps> = ({ sections }) => {
  return (
    <article className={styles.category}>
      <CategoryCards sections={sections} withCities='apartments' />
      <MainCategorySections sections={sections} />
    </article>
  );
};

export default memo(MainCategory);
