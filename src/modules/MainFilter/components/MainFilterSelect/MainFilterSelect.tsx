import { memo } from 'react';

import { useSelectValue } from '@hooks/useSelectValue';
import { SelectType } from '@mytypes/assistantTypes';
import Select, { SelectClass } from '@views/Select';

import styles from './MainFilterSelect.module.scss';

type MainFilterSelectProps = {
  handleSetValue: (field: string, value: string) => void;
  items: SelectType[];
  name: string;
};

const MainFilterSelect: React.FC<MainFilterSelectProps> = ({ handleSetValue, name, items }) => {
  const { selectValue, handleSelect } = useSelectValue({
    handleSetValue,
    name,
  });

  return (
    <div className={styles.filter__select}>
      <Select
        className={SelectClass.filter}
        items={items}
        selectedValue={selectValue}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default memo(MainFilterSelect);
