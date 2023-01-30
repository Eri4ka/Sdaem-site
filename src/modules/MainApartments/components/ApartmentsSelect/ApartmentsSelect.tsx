import { memo } from 'react';

import { useSelectValue } from '@hooks/useSelectValue';
import { SelectType } from '@mytypes/assistantTypes';
import Select, { SelectClass } from '@views/Select';

import styles from './ApartmentsSelect.module.scss';

type ApartmentsSelectProps = {
  handleSetValue: (field: string, value: string) => void;
  items: SelectType[];
  name: string;
  label: string;
  icon?: React.ReactElement;
};

const ApartmentsSelect: React.FC<ApartmentsSelectProps> = ({
  handleSetValue,
  items,
  name,
  label,
  icon,
}) => {
  const { selectValue, handleSelect } = useSelectValue({
    handleSetValue,
    name,
  });

  return (
    <div className={styles.apartments__select}>
      <Select
        className={SelectClass.slider}
        items={items}
        label={label}
        selectedValue={selectValue}
        handleSelect={handleSelect}
        icon={icon}
      />
    </div>
  );
};

export default memo(ApartmentsSelect);
