import { memo } from 'react';

import UserIc from '@public/icons/card/badge/user.svg';

import styles from './Badge.module.scss';

type BadgeProps = {
  roomsType?: boolean;
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ roomsType = false, text }) => {
  return (
    <div className={styles.badge}>
      {roomsType && <UserIc className={styles.badge__icon} alt='rooms-type' />}
      {text}
    </div>
  );
};

export default memo(Badge);
