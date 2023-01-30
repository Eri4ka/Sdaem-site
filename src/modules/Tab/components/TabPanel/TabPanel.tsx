import styles from './TabPanel.module.scss';

type TabPanelProps = {
  id: string;
  activeTab: string;
  children: React.ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = ({ id, activeTab, children }) => {
  return id === activeTab ? <div className={styles.panel}>{children}</div> : null;
};

export default TabPanel;
