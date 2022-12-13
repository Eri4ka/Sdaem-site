import Link from 'next/link';
import { useRouter } from 'next/router';

import Heart from '@public/icons/heart.svg';
import Map from '@public/icons/map.svg';
import { useAppSelector, useAppDispatch } from '@utils/redux/reduxHooks';
import { getAuthState } from '@utils/redux/selectors';
import { fetchSignOut } from '@utils/redux/slices/authSlice';

import HeaderTopAccount from './components/HeaderTopAccount';
import styles from './HeaderTop.module.scss';

const HeaderTop: React.FC = () => {
  const { pathname } = useRouter();
  const { user } = useAppSelector(getAuthState);
  const dispatch = useAppDispatch();

  return (
    <div className={styles['header-top']}>
      <nav className={styles['header-top__nav']}>
        <ul className={`list ${styles['header-top__list']}`}>
          <li
            className={`${styles['header-top__item']} ${
              pathname === '/' ? styles['header-top__item_active'] : ''
            } `}>
            <Link href='/'>Главная</Link>
          </li>
          <li
            className={`${styles['header-top__item']} ${
              pathname.startsWith('/news') ? styles['header-top__item_active'] : ''
            } `}>
            <Link href='/news'>Новости</Link>
          </li>
          <li
            className={`${styles['header-top__item']} ${
              pathname === '/' ? styles['header-top__item_active'] : ''
            } `}>
            <Link href='/'>Размещение и тарифы</Link>
          </li>
          <li
            className={`${styles['header-top__item']} ${
              pathname === '/' ? styles['header-top__item_active'] : ''
            } `}>
            <Link href='/' className={styles['header-top__item_wrapper']}>
              <div className={styles['header-top__item_icon']}>
                <Map className={styles['header-top__svg']} />
              </div>
              Объявления на карте
            </Link>
          </li>
          <li
            className={`${styles['header-top__item']} ${
              pathname === '/contacts' ? styles['header-top__item_active'] : ''
            } `}>
            <Link href='/contacts'>Контакты</Link>
          </li>
        </ul>
        <div className={styles['header-top__user']}>
          <Link href='/' className={styles['header-top__user_wrapper']}>
            Закладки
            <div className={styles['header-top__user_icon']}>
              <Heart className={styles['header-top__svg']} />
            </div>
          </Link>
          {user ? (
            <HeaderTopAccount
              login={user.login ? user.login : 'Профиль'}
              photo={user.photoURL}
              onClick={() => dispatch(fetchSignOut())}
            />
          ) : (
            <Link href='/signin' className={styles['header-top__user_account']}>
              Вход и регистрация
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
