import { NewsType } from '@mytypes/newsTypes';

import { newsList } from '../data/newsList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getNews(req: NextApiRequest, res: NextApiResponse<NewsType[]>) {
  const { similar } = req.query;
  if (similar) {
    const newsListSimilars = newsList.filter((item) => item.alias !== similar).slice(0, 3);
    res.status(200).json(newsListSimilars);
  } else {
    res.status(200).json(newsList);
  }
}
