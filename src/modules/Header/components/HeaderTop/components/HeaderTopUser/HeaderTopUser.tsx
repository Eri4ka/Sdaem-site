import Link from 'next/link';
import { useCallback } from 'react';

import HeartIc from '@icons/header/heart.svg';
import { useAppDispatch, useAppSelector } from '@redux/reduxHooks';
import { getAuthState } from '@redux/selectors/authSelectors';
import { fetchSignOut } from '@redux/slices/authSlice';

import HeaderTopAccount from '../HeaderTopAccount';
import styles from './HeaderTopUser.module.scss';

const HeaderTopUser = () => {
  const { user } = useAppSelector(getAuthState);
  const dispatch = useAppDispatch();

  const onExit = useCallback(() => dispatch(fetchSignOut()), [dispatch]);

  return (
    <div className={styles['header-top__user']}>
      <Link href='/favorites' className={styles['header-top__user-wrapper']}>
        <p className={styles['header-top__user-text']}>Закладки</p>
        <div className={styles['header-top__user-icon']}>
          <HeartIc className={styles['header-top__svg']} />
        </div>
      </Link>
      {user ? (
        <HeaderTopAccount
          login={user.login ? user.login : 'Профиль'}
          photo={user.photoURL}
          onExit={onExit}
        />
      ) : (
        <Link href='/signin' className={styles['header-top__user-account']}>
          Вход и регистрация
        </Link>
      )}
    </div>
  );
};

export default HeaderTopUser;
