import { memo, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ApartmentsType } from '@mytypes/productTypes';
import { useAppSelector } from '@redux/reduxHooks';
import { getApartmentsView } from '@redux/selectors/apartmentsSelector';

import { useModalPosition } from '../../hooks/useModalPosition';
import CatalogProductsCard from '../CatalogProductsCard';
import styles from './CatalogProductsList.module.scss';

type CatalogItemsListProps = {
  items: ApartmentsType[];
  firstContentIndex: number;
  lastContentIndex: number;
};

const CatalogProductsList: React.FC<CatalogItemsListProps> = ({
  items,
  firstContentIndex,
  lastContentIndex,
}) => {
  const view = useAppSelector(getApartmentsView);
  const { onChangeModalPosition } = useModalPosition();

  const isTales = view === 'tiles';

  useEffect(() => {
    if (isTales) {
      onChangeModalPosition();
    }
  }, [items, isTales, onChangeModalPosition]);

  return (
    <TransitionGroup
      className={`list ${styles.list} ${view === 'list' ? styles.list_wide : styles.list_short}`}>
      {items.slice(firstContentIndex, lastContentIndex).map((item) => (
        <CSSTransition
          key={item.id}
          timeout={300}
          classNames={{
            enter: styles['list-enter'],
            enterActive: styles['list-enterActive'],
            exit: styles['list-exit'],
            exitActive: styles['list-exitActive'],
          }}>
          <CatalogProductsCard item={item} short={isTales} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default memo(CatalogProductsList);
