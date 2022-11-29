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
