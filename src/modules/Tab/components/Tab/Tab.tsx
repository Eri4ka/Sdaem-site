import { useState } from 'react';

import { TabType } from '../../types';
import TabItem from '../TabItem';
import TabPanel from '../TabPanel';
import styles from './Tab.module.scss';

type TabProps = {
  tabs: TabType[];
  initialTab: string;
  children: React.ReactNode[];
};

const Tab: React.FC<TabProps> = ({ tabs, initialTab, children }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  return (
    <div className={styles.tab}>
      <ul className={`list ${styles.tab__tabs}`}>
        {tabs.map(({ id, title }, i) => (
          <TabItem
            key={`${id}${i}`}
            id={id}
            title={title}
            activeTab={activeTab}
            setActiveTab={() => setActiveTab(id)}
          />
        ))}
      </ul>
      {tabs.map(({ id }, i) => (
        <TabPanel key={`${id}${i}`} id={id} activeTab={activeTab}>
          {children?.map((item, idx) => {
            if (i === idx) {
              return item;
            }
          })}
        </TabPanel>
      ))}
    </div>
  );
};

export default Tab;
