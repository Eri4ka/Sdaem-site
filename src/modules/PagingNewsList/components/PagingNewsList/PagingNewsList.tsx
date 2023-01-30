import Pagination from '@components/Pagination';
import { usePagination } from '@hooks/usePagination';
import { NewsType } from '@mytypes/newsTypes';

import { NEWS_ON_PAGE } from '../../constants';
import NewsList from '../NewsList';

type PagingNewsListProps = {
  news: NewsType[];
};

const PagingNewsList: React.FC<PagingNewsListProps> = ({ news }) => {
  const { page, setPage, totalPages, firstContentIndex, lastContentIndex } = usePagination({
    onPage: NEWS_ON_PAGE,
    total: news.length,
  });

  return (
    <>
      <NewsList
        news={news}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
      />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default PagingNewsList;
