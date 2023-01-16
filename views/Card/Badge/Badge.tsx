import { memo, useMemo } from 'react';

import MetroIc from '@public/icons/card/badge/metro.svg';
import UserIc from '@public/icons/card/badge/user.svg';
import UserTallIc from '@public/icons/card/badge/userTall.svg';

import styles from './Badge.module.scss';

type BadgeProps = {
  wide?: boolean;
  type?: 'roomsType' | 'metro' | 'district';
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ wide = false, type, text }) => {
  const getIcon = useMemo(() => {
    switch (type) {
      case 'roomsType':
        return wide ? (
          <UserTallIc className={styles.badge__icon} alt='rooms-type' />
        ) : (
          <UserIc className={styles.badge__icon} alt='rooms-type' />
        );
      case 'district':
        return <span className={styles.badge__text}>район:&nbsp;</span>;
      case 'metro':
        return <MetroIc className={styles.badge__icon} alt='metro' />;
      default:
        return;
    }
  }, [type, wide]);

  return (
    <div className={`${styles.badge} ${wide ? styles.badge_wide : ''}`}>
      {getIcon}
      {text}
    </div>
  );
};

export default memo(Badge);
