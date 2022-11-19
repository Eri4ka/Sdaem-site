import { ApartmentsType } from '@utils/types/types';

import { apartmentsList } from './data/apartmentsList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getApartments(req: NextApiRequest, res: NextApiResponse<ApartmentsType[]>) {
  res.status(200).json(apartmentsList);
}
