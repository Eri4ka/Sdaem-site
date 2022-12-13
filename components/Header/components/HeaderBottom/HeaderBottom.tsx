import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Map from '@public/icons/map.svg';
import logo from '@public/images/logo.png';
import Button, { ButtonClass } from '@views/Button';
import Select from '@views/Select';

import styles from './HeaderBottom.module.scss';

type ApartmentsType = { id: number; title: string; path: string };

const HeaderBottom: React.FC = () => {
  const [visibleSelect, setVisibleSelect] = useState<boolean>(false);

  const apartments = [
    { id: 1, title: 'Квартиры на сутки в Минске', path: '/minsk' },
    { id: 2, title: 'Квартиры на сутки в Гомеле', path: '/gomel' },
    { id: 3, title: 'Квартиры на сутки в Бресте', path: '/brest' },
    { id: 4, title: 'Квартиры на сутки в Витебске', path: '/vitebsk' },
    { id: 5, title: 'Квартиры на сутки в Гродно', path: '/grodno' },
    { id: 6, title: 'Квартиры на сутки в Могилеве', path: '/mogilev' },
  ] as ApartmentsType[];

  const handleVisibleSelect = () => {
    setVisibleSelect((value) => !value);
  };
  return (
    <div className={styles['header-bottom']}>
      <div className={styles['header-bottom__wrapper']}>
        <div className={styles['header-bottom__logo']}>
          <Image src={logo} alt='logo' />
        </div>
        <nav className={`list ${styles['header-bottom__nav']}`}>
          <ul className={`list ${styles['header-bottom__list']}`}>
            <li className={styles['header-bottom__item']}>
              <Select<ApartmentsType>
                items={apartments}
                visible={visibleSelect}
                setVisible={handleVisibleSelect}>
                Квартиры на сутки
                <div className={styles['header-bottom__item_icon']}>
                  <Map className={styles['header-bottom__svg']} />
                </div>
              </Select>
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

export default HeaderBottom;
