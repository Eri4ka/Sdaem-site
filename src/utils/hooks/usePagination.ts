import { useState, useEffect, useCallback } from 'react';

import { scrollToTop } from '@helpers/scrollToTop';

type usePaginationProps = {
  onPage: number;
  total: number;
};

export const usePagination = ({ onPage, total }: usePaginationProps) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(total / onPage);
  const lastContentIndex = page * onPage;
  const firstContentIndex = lastContentIndex - onPage;

  const handleSetPage = useCallback((page: number) => {
    scrollToTop(0, 0);
    setPage(page);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [total]);

  return { page, handleSetPage, totalPages, lastContentIndex, firstContentIndex };
};
