import { memo, useMemo, useState } from 'react';

import { declinationCityName } from '@utils/helpers';
import { useCrumbs } from '@utils/hooks/useCrumbs';
import { SingleSectionType } from '@utils/types';
import BreadCrumbs from '@views/BreadCrumbs';

import styles from './CatalogHead.module.scss';
import CatalogHeadList from './components/CatalogHeadList';

type CatalogHeadProps = {
  section: SingleSectionType;
};

const CatalogHead: React.FC<CatalogHeadProps> = ({ section }) => {
  const { section_name, title: section_title } = section;

  const [activeTitle, setActiveTitle] = useState('');

  const dynamicTitle = useMemo(() => declinationCityName(section_title), [section_title]);

  const staticTitle = useMemo(() => {
    switch (section_name) {
      case 'apartments':
        return `Аренда квартир на сутки в ${dynamicTitle}`;
      case 'cottages':
        return `${section_title} на сутки`;
      default:
        return section_title;
    }
  }, [dynamicTitle, section_name, section_title]);

  const title = activeTitle ? `${activeTitle} ${dynamicTitle}` : staticTitle;

  const breadCrumbsTitle = useMemo(() => {
    switch (section_name) {
      case 'apartments':
        return `Квартиры в ${dynamicTitle}`;
      case 'cottages':
        return `${section_title} на сутки`;
      default:
        return section_title;
    }
  }, [dynamicTitle, section_name, section_title]);

  const { asPath, getCrumbs } = useCrumbs({ title: breadCrumbsTitle });

  return (
    <article className={styles.head}>
      <div className={styles.head__content}>
        <BreadCrumbs crumbList={getCrumbs} pathname={asPath} />
        <h1 className={styles.head__title}>{title}</h1>
        <CatalogHeadList setActiveTitle={setActiveTitle} />
      </div>
    </article>
  );
};

export default memo(CatalogHead);
