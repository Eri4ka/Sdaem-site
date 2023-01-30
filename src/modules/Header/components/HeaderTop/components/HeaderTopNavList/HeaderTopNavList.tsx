import MapIc from '@icons/map.svg';

import HeaderTopNavItem from '../HeaderTopNavItem';
import styles from './HeaderTopNavList.module.scss';

const headerTopSections = [
  {
    title: 'Главная',
    href: '/',
    startsWith: false,
  },
  {
    title: 'Новости',
    href: '/news',
    startsWith: true,
  },
  {
    title: 'Размещение и тарифы',
    href: '/tariffs',
    startsWith: false,
  },
  {
    title: 'Объявления на карте',
    href: '/map',
    startsWith: false,
    icon: <MapIc className={styles['header-top__svg']} />,
  },
  {
    title: 'Контакты',
    href: '/contacts',
    startsWith: false,
  },
];

const HeaderTopNavList: React.FC = () => {
  return (
    <ul className={`list ${styles['header-top__list']}`}>
      {headerTopSections.map(({ title, href, startsWith, icon }, i) => (
        <HeaderTopNavItem key={i} title={title} href={href} startsWith={startsWith} icon={icon} />
      ))}
    </ul>
  );
};

export default HeaderTopNavList;
