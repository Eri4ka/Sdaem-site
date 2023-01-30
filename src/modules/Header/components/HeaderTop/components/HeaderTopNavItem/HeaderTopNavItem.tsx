import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './HeaderTopNavItem.module.scss';

type HeaderTopNavItemProps = {
  title: string;
  href: string;
  startsWith: boolean;
  icon?: React.ReactNode;
};

const HeaderTopNavItem: React.FC<HeaderTopNavItemProps> = ({ title, href, startsWith, icon }) => {
  const { pathname } = useRouter();
  const currentPath = startsWith ? pathname.startsWith(href) : pathname === href;

  return (
    <li
      className={`${styles['header-top__item']} ${
        currentPath ? styles['header-top__item_active'] : ''
      } `}>
      <Link href={href} className={styles['header-top__item-link']}>
        {icon && <div className={styles['header-top__item-icon']}>{icon}</div>}
        {title}
      </Link>
    </li>
  );
};

export default HeaderTopNavItem;
