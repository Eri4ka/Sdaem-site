import { memo, useMemo, useEffect } from 'react';

import ListIc from '@public/icons/catalog/sorting/list.svg';
import TilesIc from '@public/icons/catalog/sorting/tiles.svg';
import { useAppDispatch, useAppSelector } from '@utils/redux/reduxHooks';
import { getApartmentsView } from '@utils/redux/selectors/apartmentsSelector';
import { getTabletMinimum } from '@utils/redux/selectors/systemInfromationSelectors';
import { changeView } from '@utils/redux/slices/apartmentsSlice';
import { ViewType } from '@utils/types';

import styles from './CatalogSortingView.module.scss';

type CatalogSortingViewProps = {
  type: ViewType;
};

const CatalogSortingView: React.FC<CatalogSortingViewProps> = ({ type }) => {
  const isTabletMinimum = useAppSelector(getTabletMinimum);
  const view = useAppSelector(getApartmentsView);
  const dispatch = useAppDispatch();

  const handleChangeView = () => {
    dispatch(changeView(type));
  };

  useEffect(() => {
    if (isTabletMinimum) {
      dispatch(changeView('tiles'));
    }
  }, [dispatch, isTabletMinimum]);

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

  return (
    <button
      className={`${styles.view} ${type === view ? styles.view_focus : ''}`}
      onClick={handleChangeView}>
      {renderView}
    </button>
  );
};

export default memo(CatalogSortingView);
