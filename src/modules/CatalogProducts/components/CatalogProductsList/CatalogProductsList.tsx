import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useLocalStorage } from '@hooks/useLocalStorage';
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
  const { asPath } = useRouter();
  const view = useAppSelector(getApartmentsView);
  const { onChangeModalPosition } = useModalPosition();
  const { data, handleToggleData } = useLocalStorage('favoritesList');

  const isTales = view === 'tiles';

  useEffect(() => {
    if (isTales) {
      onChangeModalPosition();
    }
  }, [items, isTales, onChangeModalPosition]);

  return (
    <TransitionGroup
      className={`list ${styles.list} ${view === 'list' ? styles.list_wide : styles.list_short}`}>
      {items.slice(firstContentIndex, lastContentIndex).map((item) => {
        const stringifiedId = String(item.id);
        const isFavorite = data?.includes(stringifiedId);

        const cardRoute = `${asPath}/${item.id}`;

        return (
          <CSSTransition
            key={item.id}
            timeout={300}
            classNames={{
              enter: styles['list-enter'],
              enterActive: styles['list-enterActive'],
              exit: styles['list-exit'],
              exitActive: styles['list-exitActive'],
            }}>
            <CatalogProductsCard
              item={item}
              short={isTales}
              isFavorite={isFavorite}
              handleToggleFavorite={() => handleToggleData(stringifiedId)}
              route={cardRoute}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default memo(CatalogProductsList);
