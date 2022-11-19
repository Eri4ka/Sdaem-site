import { NewsType } from '@utils/types';

import { newsList } from '../data/newsList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getNews(req: NextApiRequest, res: NextApiResponse<NewsType[]>) {
  res.status(200).json(newsList);
}
