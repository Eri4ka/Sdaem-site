import { memo } from 'react';

import { useToggle } from '@hooks/useToggle';
import { ProductOptions } from '@mytypes/productTypes';

import { useMainFilter } from '../../hooks/useMainFilter';
import { CityFilterType, OptionFilterType } from '../../types';
import MainFilterOptions from '../MainFilterOptions';
import MainFilterWrapper from '../MainFilterWrapper';

type MainFilterProps = {
  options: ProductOptions[];
  city: CityFilterType;
  secondFilter: OptionFilterType;
  optionFilter: OptionFilterType[];
};

const MainFilter: React.FC<MainFilterProps> = ({ city, secondFilter, optionFilter, options }) => {
  const { handleSetValue, onSubmit, isDisabled } = useMainFilter(city.items);
  const { toggle, handleToggle } = useToggle({});

  return (
    <form onSubmit={onSubmit}>
      <MainFilterWrapper
        city={city}
        secondFilter={secondFilter}
        handleToggle={handleToggle}
        handleSetValue={handleSetValue}
        isDisabled={isDisabled}
      />
      <MainFilterOptions
        isVisible={toggle}
        optionFilter={optionFilter}
        options={options}
        handleSetValue={handleSetValue}
      />
    </form>
  );
};

export default memo(MainFilter);
