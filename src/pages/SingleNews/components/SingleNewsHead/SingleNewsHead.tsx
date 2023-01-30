import { memo } from 'react';

import BreadCrumbs from '@components/BreadCrumbs';
import { useCrumbs } from '@hooks/useCrumbs';

import SingleNewsIcons from '../SingleNewsIcons';
import styles from './SingleNewsHead.module.scss';

type SingleNewsHeadProps = {
  title: string;
  published: string;
};

const SingleNewsHead: React.FC<SingleNewsHeadProps> = ({ title, published }) => {
  const { asPath, getCrumbs } = useCrumbs({ title });
  return (
    <article className={styles['singlenews-head']}>
      <div className={styles['singlenews-head__container']}>
        <BreadCrumbs crumbList={getCrumbs} pathname={asPath} />
        <h1 className={styles['singlenews-head__head']}>{title}</h1>
        <div className={styles['singlenews-head__badges']}>
          <div className={styles['singlenews-head__date']}>{published}</div>
          <SingleNewsIcons />
        </div>
      </div>
    </article>
  );
};

export default memo(SingleNewsHead);
