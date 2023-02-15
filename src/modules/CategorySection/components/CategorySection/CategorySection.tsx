import { memo, useMemo } from 'react';

import ArrowIc from '@icons/main/category/arrow.svg';
import { SingleSectionType } from '@mytypes/sectionTypes';

import { LENGTH_TO_SLICE } from '../../constants';
import { useCategorySlice } from '../../hooks/useCategorySlice';
import CategorySectionItem from '../CategorySectionItem';
import styles from './CategorySection.module.scss';

type CategorySectionProps = {
  head: string;
  category: SingleSectionType[];
  isSlice?: boolean;
};

const CategorySection: React.FC<CategorySectionProps> = ({ head, category, isSlice = true }) => {
  const isMore = category.length > LENGTH_TO_SLICE;

  const { slice, handleSlice, sliced } = useCategorySlice({
    value: isSlice && isMore,
    sliceValue: LENGTH_TO_SLICE,
    elements: category,
  });

  const renderedSectionItems = useMemo(() => {
    return sliced.map(({ id, content, total, alias }) => {
      return <CategorySectionItem key={id} href={`/${alias}`} title={content} total={total} />;
    });
  }, [sliced]);

  return (
    <div className={styles.section}>
      <h3 className={styles.section__head}>{head}</h3>
      <ul className={`list`}>{renderedSectionItems}</ul>
      {isSlice && (
        <div className={styles.section__toggle} onClick={handleSlice}>
          <span className={styles['section__toggle-text']}>{slice ? 'Еще' : 'Скрыть'}</span>
          <ArrowIc
            className={`${styles['section__toggle-icon']} ${
              !slice ? styles['section__toggle-icon_rotate'] : ''
            }`}
            alt='arrow'
          />
        </div>
      )}
    </div>
  );
};

export default memo(CategorySection);
