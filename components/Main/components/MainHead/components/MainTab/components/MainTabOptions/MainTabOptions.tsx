import { ApartmentOptions } from '@utils/types';
import FilterCheckBox from '@views/Filter/FilterCheckBox';

import styles from './MainTabOptions.module.scss';

type MainTabOptionsProps = {
  isVisible: boolean;
  options: ApartmentOptions[];
  children: React.ReactNode;
  handleSetValue: (field: string, value: boolean) => void;
};

const MainTabOptions: React.FC<MainTabOptionsProps> = ({
  isVisible,
  options,
  children,
  handleSetValue,
}) => {
  return (
    <div
      className={`${styles['main-tab-options']} ${
        isVisible ? styles['main-tab-options_show'] : ''
      }`}>
      <div className={styles['main-tab-options__wrapper']}>{children}</div>
      <div className={styles['main-tab-options__grid']}>
        {options.map(({ id, title, option_name }) => {
          return (
            <div className={styles['main-tab-options__checkbox']} key={id}>
              <FilterCheckBox field={option_name} label={title} handleSetValue={handleSetValue} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainTabOptions;
