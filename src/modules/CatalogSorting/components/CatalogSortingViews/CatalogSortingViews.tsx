import { useAppSelector } from '@redux/reduxHooks';
import { getApartmentsView } from '@redux/selectors/apartmentsSelector';
import SortingView from '@views/SortingView';

import { useChangeView } from '../../hooks/useChangeView';
import styles from './CatalogSortingViews.module.scss';

const CatalogSortingViews: React.FC = () => {
  const view = useAppSelector(getApartmentsView);

  const { onChangeView } = useChangeView();

  return (
    <div className={styles.sorting__views}>
      <SortingView type='list' view={view} onChangeView={onChangeView} />
      <SortingView type='tiles' view={view} onChangeView={onChangeView} />
    </div>
  );
};

export default CatalogSortingViews;
