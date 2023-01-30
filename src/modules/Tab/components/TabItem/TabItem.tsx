import { memo } from 'react';

import styles from './TabItem.module.scss';

type TabItemProps = {
  title: string;
  id: string;
  activeTab: string;
  setActiveTab: () => void;
};

const TabItem: React.FC<TabItemProps> = ({ title, id, activeTab, setActiveTab }) => {
  return (
    <li
      className={`${styles.tab__item} ${activeTab === id ? styles.tab__item_active : ''}`}
      onClick={setActiveTab}>
      {title}
    </li>
  );
};

export default memo(TabItem);
