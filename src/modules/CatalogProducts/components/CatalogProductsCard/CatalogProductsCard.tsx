import dynamic from 'next/dynamic';
import { memo } from 'react';

import ShortCard from '@components/ShortCard';
import { ApartmentsType } from '@mytypes/productTypes';
import Loader from '@views/Loader';

const WideCard = dynamic(() => import('@components/WideCard'), {
  loading: () => <Loader />,
});

type CatalogProductsCardProps = {
  short?: boolean;
  catalog?: boolean;
  item: ApartmentsType;
  handleToggleFavorite: () => void;
  isFavorite: boolean;
  route: string;
};

const CatalogProductsCard: React.FC<CatalogProductsCardProps> = ({ short = true, ...props }) => {
  if (short) {
    return <ShortCard catalog {...props} />;
  }

  return <WideCard {...props} />;
};

export default memo(CatalogProductsCard);
