import { ApartmentsType } from '@utils/types';

import ShortCard from './ShortCard';
import WideCard from './WideCard';

type CardProps = {
  short?: boolean;
  catalog?: boolean;
  item: ApartmentsType;
};

const Card: React.FC<CardProps> = ({ short = true, ...props }) => {
  if (short) {
    return <ShortCard {...props} />;
  }

  return <WideCard {...props} />;
};

export default Card;
