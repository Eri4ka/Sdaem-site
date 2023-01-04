import { SelectType } from '@utils/types';
import FilterCheckBox from '@views/Filter/FilterCheckBox';

import styles from './MainTabOptions.module.scss';

type MainTabOptionsProps = {
  isVisible: boolean;
  options: SelectType[];
  children: React.ReactNode;
  handleSetOptions: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
};

const MainTabOptions: React.FC<MainTabOptionsProps> = ({
  isVisible,
  options,
  children,
  handleSetOptions,
}) => {
  return (
    <div
      className={`${styles['main-tab-options']} ${
        isVisible ? styles['main-tab-options_show'] : ''
      }`}>
      <div className={styles['main-tab-options__wrapper']}>{children}</div>
      <div className={styles['main-tab-options__grid']}>
        {options.map(({ id, title }) => {
          return (
            <div className={styles['main-tab-options__checkbox']} key={id}>
              <FilterCheckBox id={id} label={title} handleSetOptions={handleSetOptions} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainTabOptions;
