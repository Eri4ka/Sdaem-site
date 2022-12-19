import { useAppSelector } from '@utils/redux/reduxHooks';
import { getSectionState } from '@utils/redux/selectors';

import MainHead from './components/MainHead';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const sections = useAppSelector(getSectionState);

  return (
    <article className={styles.main}>
      <MainHead sections={sections} />
    </article>
  );
};

export default Main;
