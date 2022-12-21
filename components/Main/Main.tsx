import { useAppSelector } from '@utils/redux/reduxHooks';
import { getSectionCount } from '@utils/redux/selectors';

import MainCategory from './components/MainCategory';
import MainHead from './components/MainHead';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const sections = useAppSelector(getSectionCount);

  return (
    <article className={styles.main}>
      <MainHead sections={sections} />
      <MainCategory sections={sections} />
    </article>
  );
};

export default Main;
