import SearchIcon from '@public/icons/search.svg';
import Button, { ButtonClass } from '@views/Button';

import styles from './Search.module.scss';

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
};

const Search: React.FC<SearchProps> = ({ value, ...props }) => {
  return (
    <div className={styles.search}>
      <input className={styles.search__input} value={value} type='text' {...props} />
      <div className={styles.search__button}>
        <Button className={ButtonClass.search}>
          <div className={styles.search__button_icon}>
            <SearchIcon className={styles.search__svg} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Search;
