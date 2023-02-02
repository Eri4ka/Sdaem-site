import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect } from 'react';

import MapIc from '@icons/map.svg';
import logo from '@images/logo.png';
import { getSectionState } from '@redux/selectors/sectionSelectors';
import { useAppDispatch, useAppSelector } from '@utils/redux/reduxHooks';
import Button, { ButtonClass } from '@views/Button';

import { fetchSections } from '../../redux/thunks';
import HeaderSelect from '../HeaderSelect';
import styles from './HeaderBottom.module.scss';

const HeaderBottom: React.FC = () => {
  const dispatch = useAppDispatch();
  const { apartments } = useAppSelector(getSectionState);

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  return (
    <div className={styles['header-bottom']}>
      <div className={styles['header-bottom__wrapper']}>
        <div className={styles['header-bottom__logo']}>
          <Image src={logo} priority alt='logo' />
        </div>
        <nav className={`list ${styles['header-bottom__nav']}`}>
          <ul className={`list ${styles['header-bottom__list']}`}>
            <HeaderSelect items={apartments} title='Квартиры на сутки'>
              <div className={styles['header-bottom__item-icon']}>
                <MapIc className={styles['header-bottom__svg']} />
              </div>
            </HeaderSelect>
            <li className={styles['header-bottom__item']}>
              <Link href='/cottages' className={styles['header-bottom__link']}>
                Коттеджы и усадьбы
              </Link>
            </li>
            <li className={styles['header-bottom__item']}>
              <Link href='/baths' className={styles['header-bottom__link']}>
                Бани и сауны
              </Link>
            </li>
            <li className={styles['header-bottom__item']}>
              <Link href='/automobile' className={styles['header-bottom__link']}>
                Авто напрокат
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles['header-bottom__button']}>
          <Button className={ButtonClass.adt}>+ Разместить объявление</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderBottom);
