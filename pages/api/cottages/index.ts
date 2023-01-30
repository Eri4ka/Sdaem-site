import { CottagesType } from '@mytypes/productTypes';

import { cottagesList } from '../data/cottagesList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getSections(req: NextApiRequest, res: NextApiResponse<CottagesType[]>) {
  res.status(200).json(cottagesList);
}
