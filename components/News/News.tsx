import { memo } from 'react';

import { NEWS_ON_PAGE } from '@utils/constants';
import { useCrumbs } from '@utils/hooks/useCrumbs';
import { usePagination } from '@utils/hooks/usePagination';
import { NewsType } from '@utils/types';
import BreadCrumbs from '@views/BreadCrumbs';
import Pagination from '@views/Pagination';

import NewsList from './components/NewsList';
import Search from './components/Search';
import styles from './News.module.scss';

type NewsProps = {
  data: NewsType[];
};

const News: React.FC<NewsProps> = ({ data }) => {
  const { asPath, getCrumbs } = useCrumbs({});
  const { page, setPage, totalPages, firstContentIndex, lastContentIndex } = usePagination({
    onPage: NEWS_ON_PAGE,
    total: data.length,
  });

  return (
    <section className={styles.news}>
      <div className={styles.news__container}>
        <BreadCrumbs crumbList={getCrumbs} pathname={asPath} />
        <div className={styles.news__top}>
          <h1 className={styles.news__head}>Новости</h1>
          <Search placeholder='Поиск по статьям' />
        </div>
        <NewsList
          data={data}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
        />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </section>
  );
};

export default memo(News);
