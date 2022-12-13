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
