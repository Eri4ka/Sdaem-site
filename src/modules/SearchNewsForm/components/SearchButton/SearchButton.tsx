import SearchIcon from '@icons/news/search/search.svg';
import Button, { ButtonClass } from '@views/Button';

import styles from './SearchButton.module.scss';

const SearchButton = () => {
  return (
    <div className={styles.search__button}>
      <Button className={ButtonClass.search} type='submit' aria-label='Search button'>
        <div className={styles.search__button_icon}>
          <SearchIcon className={styles.search__svg} />
        </div>
      </Button>
    </div>
  );
};

export default SearchButton;
