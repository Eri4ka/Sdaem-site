/* eslint-disable @typescript-eslint/ban-ts-comment */
import { memo } from 'react';

import styles from './Pagination.module.scss';

type PaginationProps = {
  page: number;
  totalPages: number;
  handleSetPage: (value: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, handleSetPage }) => {
  /* @ts-ignore */
  const pageValues = [...Array(totalPages).keys()];

  return (
    <div className={styles.pagination}>
      <ul className={`list ${styles.pagination__pages}`}>
        {pageValues.map((item) => {
          const currentPage = item + 1;
          return (
            <li
              className={`${styles.pagination__page} ${
                page === currentPage ? styles.pagination__page_active : ''
              }`}
              key={item}
              onClick={() => handleSetPage(currentPage)}>
              {currentPage}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(Pagination);
