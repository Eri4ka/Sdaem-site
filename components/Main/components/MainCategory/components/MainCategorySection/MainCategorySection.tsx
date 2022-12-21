import { memo, useMemo, useState } from 'react';

import ArrowIc from '@public/icons/main/category/arrow.svg';
import { useSlice } from '@utils/hooks/useSlice';
import { SingleSectionType } from '@utils/types';

import MainCategorySectionItem from '../MainCategorySectionItem';
import styles from './MainCategorySection.module.scss';

type MainCategorySectionProps = {
  head: string;
  category: SingleSectionType[];
  alias: string;
  isSlice?: boolean;
};

const MainCategorySection: React.FC<MainCategorySectionProps> = ({
  head,
  category,
  alias,
  isSlice = true,
}) => {
  const LENGTH = 4;
  const isMore = category.length > LENGTH;
  const parentAlias = alias;

  const { slice, handleSlice, sliced } = useSlice({
    value: isSlice && isMore,
    sliceValue: 4,
    elements: category,
  });

  const renderedSectionItems = useMemo(() => {
    return sliced.map(({ id, content, total, alias }) => {
      const title = content.replace(/\на сутки/g, '');

      return (
        <MainCategorySectionItem
          key={id}
          href={`${parentAlias}/${alias}`}
          title={title}
          total={total}
        />
      );
    });
  }, [sliced, parentAlias]);

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

export default memo(MainCategorySection);
