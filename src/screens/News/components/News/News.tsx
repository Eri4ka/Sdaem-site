import { memo, useState } from 'react';

import BreadCrumbs from '@components/BreadCrumbs';
import PagingNewsList from '@modules/PagingNewsList';
import SearchNewsForm from '@modules/SearchNewsForm';
import { NewsType } from '@mytypes/newsTypes';
import { useCrumbs } from '@utils/hooks/useCrumbs';

import styles from './News.module.scss';

type NewsProps = {
  data: NewsType[];
};

const News: React.FC<NewsProps> = ({ data }) => {
  const { asPath, getCrumbs } = useCrumbs({});
  const [searchData, setSearchData] = useState(data);

  return (
    <article className={styles.news}>
      <div className={styles.news__container}>
        <BreadCrumbs crumbList={getCrumbs} pathname={asPath} />
        <div className={styles.news__top}>
          <h1 className={styles.news__head}>Новости</h1>
          <SearchNewsForm
            data={data}
            setSearchData={setSearchData}
            placeholder='Поиск по статьям'
          />
        </div>
        <PagingNewsList news={searchData} />
      </div>
    </article>
  );
};

export default memo(News);
