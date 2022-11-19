import { NewsType } from '@utils/types';

import { newsList } from '../data/newsList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getSingleNews(req: NextApiRequest, res: NextApiResponse<NewsType>) {
  const { id } = req.query;
  const data: NewsType | undefined = newsList.find((item) => item.alias === id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).end();
  }
}
