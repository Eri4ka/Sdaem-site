import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect } from 'react';

import Map from '@public/icons/map.svg';
import logo from '@public/images/logo.png';
import { useToggle } from '@utils/hooks/useToggle';
import { useAppDispatch, useAppSelector } from '@utils/redux/reduxHooks';
import { getSectionState } from '@utils/redux/selectors';
import { fetchSections } from '@utils/redux/slices/sectionsSlice';
import Button, { ButtonClass } from '@views/Buttons/Button';

import HeaderSelect from '../HeaderSelect';
import styles from './HeaderBottom.module.scss';

const HeaderBottom: React.FC = () => {
  const { toggle, handleToggle } = useToggle({});
  const dispatch = useAppDispatch();
  const { apartments } = useAppSelector(getSectionState);

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  return (
    <div className={styles['header-bottom']}>
      <div className={styles['header-bottom__wrapper']}>
        <div className={styles['header-bottom__logo']}>
          <Image src={logo} alt='logo' />
        </div>
        <nav className={`list ${styles['header-bottom__nav']}`}>
          <ul className={`list ${styles['header-bottom__list']}`}>
            <li className={styles['header-bottom__item']}>
              <HeaderSelect items={apartments} visible={toggle} setVisible={handleToggle}>
                Квартиры на сутки
                <div className={styles['header-bottom__item_icon']}>
                  <Map className={styles['header-bottom__svg']} />
                </div>
              </HeaderSelect>
            </li>
            <li className={styles['header-bottom__item']}>
              <Link href='/'>Коттеджы и усадьбы</Link>
            </li>
            <li className={styles['header-bottom__item']}>
              <Link href='/'>Бани и сауны</Link>
            </li>
            <li className={styles['header-bottom__item']}>
              <Link href='/'>Авто напрокат</Link>
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
