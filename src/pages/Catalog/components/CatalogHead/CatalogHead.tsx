import Head from 'next/head';
import { memo, useMemo, useState } from 'react';

import BreadCrumbs from '@components/BreadCrumbs';
import { declinationCityName } from '@helpers/declinationCityName';
import { useCrumbs } from '@hooks/useCrumbs';
import RecommendedFilters from '@modules/RecommendedFilters';
import { SingleSectionType } from '@mytypes/sectionTypes';

import styles from './CatalogHead.module.scss';
import { getBreadCrumbsTitle } from './helpers/getBreadCrumbsTitle';
import { getStaticTitle } from './helpers/getStaticTitle';

type CatalogHeadProps = {
  section: SingleSectionType;
};

const CatalogHead: React.FC<CatalogHeadProps> = ({ section }) => {
  const [activeTitle, setActiveTitle] = useState('');

  const { section_name, title: section_title } = section;

  const cityName = useMemo(() => declinationCityName(section_title), [section_title]);

  const staticTitle = useMemo(
    () => getStaticTitle(section_name, section_title, cityName),
    [cityName, section_name, section_title],
  );

  const title = activeTitle ? `${activeTitle} ${cityName}` : staticTitle;

  const breadCrumbsTitle = useMemo(
    () => getBreadCrumbsTitle(section_name, section_title, cityName),
    [section_name, section_title, cityName],
  );

  const { asPath, getCrumbs } = useCrumbs({ title: breadCrumbsTitle });
  console.log(title);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='title' />
        <meta
          name='description'
          content={`Sdaem.by - база объявлений посуточной недвижимости. ${title}`}
        />
      </Head>
      <article className={styles.head}>
        <div className={styles.head__content}>
          <BreadCrumbs crumbList={getCrumbs} pathname={asPath} />
          <h1 className={styles.head__title}>{title}</h1>
          <RecommendedFilters setActiveTitle={setActiveTitle} />
        </div>
      </article>
    </>
  );
};

export default memo(CatalogHead);
