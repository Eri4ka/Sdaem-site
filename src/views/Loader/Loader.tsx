import LoaderIc from '@icons/loader/loader.svg';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderIc alt='loader' />
    </div>
  );
};

export default Loader;
