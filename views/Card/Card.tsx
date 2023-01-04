import { ApartmentsType } from '@utils/types';

import ShortCard from './ShortCard';

type CardProps = {
  short?: boolean;
  item: ApartmentsType;
};

const Card: React.FC<CardProps> = ({ short = true, item }) => {
  if (short) {
    return <ShortCard item={item} />;
  }

  return null;
};

export default Card;
