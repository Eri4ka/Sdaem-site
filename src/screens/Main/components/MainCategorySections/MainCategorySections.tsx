import { memo } from 'react';

import CategorySection from '@modules/CategorySection';
import { SectionType } from '@mytypes/sectionTypes';

import styles from './MainCategorySections.module.scss';

type MainCategorySectionsProps = {
  sections: SectionType;
};

const popular = [
  {
    alias: 'braslaskikh',
    section_name: 'popular',
    content: 'Коттеджи и усадьбы на о. Брасласких',
    id: 1,
    title: 'Коттеджи и усадьбы на о. Брасласких',
  },
  {
    alias: 'narochi',
    section_name: 'popular',
    content: 'Коттеджи и усадьбы (жилье) на Нарочи',
    id: 2,
    title: 'Коттеджи и усадьбы (жилье) на Нарочи',
  },
  {
    alias: 'onwater',
    section_name: 'popular',
    content: 'Коттеджи и усадьбы (жилье) у воды, на\u00A0берегу, на озере',
    id: 3,
    title: 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере',
  },
];

const MainCategorySections: React.FC<MainCategorySectionsProps> = ({ sections }) => {
  const { apartments, cottages } = sections;

  return (
    <aside className={styles.category__sections}>
      <CategorySection head='Квартиры' category={apartments} isSlice={false} />
      <CategorySection head='Коттеджы и усадьбы' category={cottages} />
      <CategorySection head='Популярные направления' category={popular} isSlice={false} />
    </aside>
  );
};

export default memo(MainCategorySections);
