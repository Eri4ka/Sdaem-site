import { memo } from 'react';

import { SectionType } from '@utils/types';

import MainTab from './components/MainTab';
import styles from './MainHead.module.scss';

type MainHeadProps = {
  sections: SectionType;
};

const MainHead: React.FC<MainHeadProps> = ({ sections }) => {
  return (
    <article className={styles.head}>
      <div className={styles.head__content}>
        <h1 className={styles.head__title}>
          Sdaem.by - у нас живут <span className={styles.head__text}>ваши объявления</span>
        </h1>
        <MainTab sections={sections} />
      </div>
    </article>
  );
};

export default memo(MainHead);
