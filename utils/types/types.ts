import { StaticImageData } from 'next/image';

export type NewsType = {
  id: number;
  alias: string;
  title: string;
  description: string;
  full_description: string[];
  image: StaticImageData;
  published: string;
  published_date: string;
};

export type SingleSectionType = {
  id: number;
  section_name: string;
  title: string;
  alias: string;
  content: string;
  total?: number;
};

export type SectionType = {
  apartments: SingleSectionType[];
  cottages: SingleSectionType[];
  baths?: SingleSectionType[];
  automobile?: SingleSectionType[];
};

export type ApartmentOptions = {
  id: number;
  title: string;
  option_name: string;
};

export type roomsType = {
  count: string;
  type: string;
};

export type ContactsType = {
  image: string | StaticImageData;
  name: string;
  phone: string;
  email: string;
  viber: string;
  whatsapp: string;
};

export type ImagesType = {
  short: string | StaticImageData;
  wide: string | StaticImageData;
};

export type ApartmentsType = {
  id: number;
  section_id: number;
  title: string;
  price: string;
  description: string;
  rooms: {
    count: string;
    type: string;
  };
  square: number;
  adress: string;
  metro: string;
  district: string;
  images: ImagesType[];
  tag?: string;
  contacts: ContactsType;
  options: ApartmentOptions[];
};

export type CottagesType = {
  id: number;
  section_id: number;
  title: string;
  price: string;
  description: string;
  places: {
    people: string;
    bed: string;
  };
  adress: string;
  options: ApartmentOptions[];
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ResponseData = {
  status: string;
  message: string;
};

export type SiginUpValues = {
  login: string;
  email: string;
  password: string;
  verifyPassword: string;
  recaptcha: string;
};

export type SiginInValues = {
  login: string;
  password: string;
  remember: boolean;
};

export type StatusType = {
  status: string;
  message: string;
};

export type SelectType = {
  id: number;
  title: string;
};

export type fielValuesType = {
  [field: string]: string | number | boolean;
};

export type ViewType = 'tiles' | 'list';

export type SortType = 'default' | 'decrease' | 'increase';

export type ApartmentBadgesType = {
  [key: string]: string;
};
