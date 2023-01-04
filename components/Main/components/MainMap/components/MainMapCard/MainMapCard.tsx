import { memo } from 'react';

import GoldCard, { GoldCardProps } from './components/GoldCard';
import SimpleCard, { SimpleCardProps } from './components/SimpleCard';

type MainMapProps = {
  gold?: boolean;
} & SimpleCardProps &
  GoldCardProps;

const MainMapCard: React.FC<MainMapProps> = ({ gold = false, ...props }) => {
  if (gold) {
    return <GoldCard {...props} />;
  }
  return <SimpleCard {...props} />;
};

export default memo(MainMapCard);
