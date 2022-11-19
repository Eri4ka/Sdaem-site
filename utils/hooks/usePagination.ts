import { useState } from 'react';

type usePaginationProps = {
  onPage: number;
  total: number;
};

export const usePagination = ({ onPage, total }: usePaginationProps) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(total / onPage);
  const lastContentIndex = page * onPage;
  const firstContentIndex = lastContentIndex - onPage;

  return { page, setPage, totalPages, lastContentIndex, firstContentIndex };
};
