import { SelectType } from '@mytypes/assistantTypes';
import { SingleSectionType } from '@mytypes/sectionTypes';

export type CityFilterType = {
  label: string;
  name: string;
  items: SingleSectionType[];
};

export type OptionFilterType = {
  label: string;
  name: string;
  items: SelectType[];
};
