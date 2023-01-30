/* eslint-disable @typescript-eslint/ban-ts-comment */
import { memo } from 'react';

import styles from './Pagination.module.scss';

type PaginationProps = {
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  /* @ts-ignore */
  const pageValues = [...Array(totalPages).keys()];

  return (
    <div className={styles.pagination}>
      <ul className={`list ${styles.pagination__pages}`}>
        {pageValues.map((item) => {
          const cur = item + 1;
          return (
            <li
              className={`${styles.pagination__page} ${
                page === cur ? styles.pagination__page_active : ''
              }`}
              key={item}
              onClick={() => setPage(cur)}>
              {cur}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(Pagination);
