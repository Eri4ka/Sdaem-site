import { memo } from 'react';

import ShortCard from '@components/ShortCard';
import WideCard from '@components/WideCard';
import { ApartmentsType } from '@mytypes/productTypes';

type CatalogProductsCardProps = {
  short?: boolean;
  catalog?: boolean;
  item: ApartmentsType;
  handleToggleFavorite: () => void;
  isFavorite: boolean;
};

const CatalogProductsCard: React.FC<CatalogProductsCardProps> = ({ short = true, ...props }) => {
  if (short) {
    return <ShortCard catalog {...props} />;
  }

  return <WideCard {...props} />;
};

export default memo(CatalogProductsCard);
