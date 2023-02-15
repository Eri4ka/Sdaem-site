import { memo, useMemo } from 'react';

import ListIc from '@icons/catalog/sorting/list.svg';
import TilesIc from '@icons/catalog/sorting/tiles.svg';
import { ViewType } from '@mytypes/productTypes';

import styles from './SortingView.module.scss';

type SortingViewProps = {
  type: ViewType;
  view: ViewType;
  onChangeView: (view: ViewType) => void;
};

const SortingView: React.FC<SortingViewProps> = ({ type, view, onChangeView }) => {
  const renderView = useMemo(() => {
    if (type === 'tiles') {
      return (
        <>
          <TilesIc className={styles.view__icon} />
          <p className={styles.view__text}>Плитки</p>
        </>
      );
    }

    if (type === 'list') {
      return (
        <>
          <ListIc className={styles.view__icon} />
          <p className={styles.view__text}>Список</p>
        </>
      );
    }
  }, [type]);

  const handeleChangeView = () => onChangeView(type);

  return (
    <button
      className={`${styles.view} ${type === view ? styles.view_focus : ''}`}
      onClick={handeleChangeView}>
      {renderView}
    </button>
  );
};

export default memo(SortingView);
