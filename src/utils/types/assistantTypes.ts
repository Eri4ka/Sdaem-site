export type SelectType = {
  id: number;
  title: string;
};

export type ParamType = {
  [field: string]: string;
};

export type FormFieldsType = {
  [field: string]: string | number | boolean;
};

export type FilterBadgeType = {
  [key: string]: string;
};
