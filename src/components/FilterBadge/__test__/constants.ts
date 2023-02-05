import { FilterBadgeType } from '@utils/types/assistantTypes';

export const NOT_ACTIVE_BADGE = 'some';

export const BADGES = {
  id: '10-Недорогие',
  title: 'Недорогие',
  heading: `Аренда недорогих квартир на сутки в`,
  priceTo: '50',
};

export const setFunc = (field: string, query: FilterBadgeType, value: boolean) => {
  return { field, query, value };
};
