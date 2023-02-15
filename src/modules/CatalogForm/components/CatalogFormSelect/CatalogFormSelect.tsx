import { memo } from 'react';

import { useSelectValue } from '@hooks/useSelectValue';
import { SelectType } from '@mytypes/assistantTypes';
import Select, { SelectClass } from '@views/Select';

import styles from './CatalogFormSelect.module.scss';

type CatalogFormSelectProps = {
  initialValue: string;
  handleSetValue: (field: string, value: string) => void;
  isReset: boolean;
  items: SelectType[];
  name: string;
};

const CatalogFormSelect: React.FC<CatalogFormSelectProps> = ({
  initialValue,
  handleSetValue,
  name,
  isReset,
  items,
}) => {
  const { selectValue, handleSelect } = useSelectValue({
    initialValue,
    handleSetValue,
    name,
    isReset,
  });

  return (
    <div className={styles['form-main__select']}>
      <Select
        className={SelectClass.filter}
        items={items}
        selectedValue={selectValue}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default memo(CatalogFormSelect);
