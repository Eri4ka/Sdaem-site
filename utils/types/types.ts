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

export type ApartmentsType = {
  id: number;
  title: string;
  path: string;
};
