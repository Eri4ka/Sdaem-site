import HeaderTopNavList from './components/HeaderTopNavList';
import HeaderTopUser from './components/HeaderTopUser';
import styles from './HeaderTop.module.scss';

const HeaderTop: React.FC = () => {
  return (
    <div className={styles['header-top']}>
      <nav className={styles['header-top__nav']}>
        <HeaderTopNavList />
        <HeaderTopUser />
      </nav>
    </div>
  );
};

export default HeaderTop;
