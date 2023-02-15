import { StaticImageData } from 'next/image';

export type NewsType = {
  id: number;
  alias: string;
  title: string;
  description: string;
  full_description: string[];
  images: NewsImagesType;
  published: string;
  published_date: string;
};

export type NewsImagesType = {
  short: StaticImageData;
  wide: StaticImageData;
};
