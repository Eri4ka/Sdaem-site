import { memo } from 'react';

import { SectionType } from '@utils/types';

import MainTab from './components/MainTab';
import styles from './MainHead.module.scss';

type MainHeadProps = {
  sections: SectionType;
};

const MainHead: React.FC<MainHeadProps> = ({ sections }) => {
  return (
    <section className={styles['main-head']}>
      <div className={styles['main-head__content']}>
        <h1 className={styles['main-head__head']}>
          Sdaem.by - у нас живут <span className={styles['main-head__text']}>ваши объявления</span>
        </h1>
        <MainTab sections={sections} />
      </div>
    </section>
  );
};

export default memo(MainHead);
