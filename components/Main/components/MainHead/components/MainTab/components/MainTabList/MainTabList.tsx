import { memo, useCallback } from 'react';

import styles from './MainTabList.module.scss';

type MainTabListProps = {
  title: string;
  id: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const MainTabList: React.FC<MainTabListProps> = ({ title, id, activeTab, setActiveTab }) => {
  const onHandleClick = useCallback(() => {
    setActiveTab(id);
  }, [id, setActiveTab]);

  return (
    <li
      className={`${styles.tab__list} ${activeTab === id ? styles.tab__list_active : ''}`}
      onClick={onHandleClick}>
      {title}
    </li>
  );
};

export default memo(MainTabList);
