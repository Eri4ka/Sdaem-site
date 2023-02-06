import { memo } from 'react';

import { NewsType } from '@mytypes/newsTypes';

import { useSearchNews } from '../../hooks/useSearchNews';
import SearchButton from '../SearchButton';
import styles from './SearchNewsForm.module.scss';

type SearchNewsFormProps = React.InputHTMLAttributes<HTMLInputElement> & {
  data: NewsType[];
  setSearchData: (value: NewsType[]) => void;
};

const SearchNewsForm: React.FC<SearchNewsFormProps> = ({ data, setSearchData, ...props }) => {
  const { handleSearch, handleSetSearchValue } = useSearchNews({ data, setSearchData });

  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input
        className={styles.search__input}
        type='text'
        onChange={handleSetSearchValue}
        aria-label='Search field'
        {...props}
      />
      <SearchButton />
    </form>
  );
};

export default memo(SearchNewsForm);
