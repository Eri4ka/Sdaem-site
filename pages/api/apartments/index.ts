import { ApartmentsType } from '@mytypes/productTypes';

import { apartmentsList } from '../data/apartmentsList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getSections(req: NextApiRequest, res: NextApiResponse<ApartmentsType[]>) {
  res.status(200).json(apartmentsList);
}
