import { StaticImageData } from 'next/image';

export type NewsType = {
  id: number;
  alias: string;
  title: string;
  description: string;
  full_description: string[];
  image: StaticImageData;
  published: string;
};

export type SingleSectionType = {
  id: number;
  title: string;
  alias: string;
  content: string;
  total: number;
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
};

export type roomsType = {
  count: string;
  type: string;
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
