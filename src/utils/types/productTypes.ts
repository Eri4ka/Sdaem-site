import { StaticImageData } from 'next/image';

export type ProductOptions = {
  id: number;
  title: string;
  option_name: string;
};

export type ImagesType = {
  short: string | StaticImageData;
  wide: string | StaticImageData;
};

export type ContactsType = {
  image: string | StaticImageData;
  name: string;
  phone: string;
  email: string;
  viber: string;
  whatsapp: string;
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
  options: ProductOptions[];
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
  options: ProductOptions[];
};

export type ViewType = 'tiles' | 'list';

export type SortType = 'default' | 'decrease' | 'increase';
