import Image from 'next/image';
import { memo } from 'react';

import userPic from '@images/profile/user.jpg';
import { useToggle } from '@utils/hooks/useToggle';

import styles from './HeaderTopAccount.module.scss';

type HeaderTopAccountProps = {
  login: string;
  photo: string | null;
  onExit: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const HeaderTopAccount: React.FC<HeaderTopAccountProps> = ({ login, photo, onExit }) => {
  const { toggle, handleToggle, triggerRef } = useToggle({});

  const handleExit = () => {
    handleToggle();
    onExit();
  };

  return (
    <div ref={triggerRef} className={styles['header-account']}>
      <div className={styles['header-account__head']} onClick={handleToggle}>
        <div className={styles['header-account__image']}>
          <Image
            src={photo ? photo : userPic}
            alt='user'
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 30px),
              (max-width: 30px)'
          />
        </div>
        <p className={styles['header-account__title']}>
          {login.length > 7 ? `${login.slice(0, 5)}...` : login}
        </p>
        <div
          className={`${styles['header-account__arrow']} ${
            toggle ? styles['header-account__arrow_show'] : ''
          }`}></div>
      </div>
      {toggle && (
        <ul className={`list ${styles['header-account__list']}`}>
          <li className={styles['header-account__item']} onClick={handleExit}>
            Выйти
          </li>
        </ul>
      )}
    </div>
  );
};

export default memo(HeaderTopAccount);
