import { SectionType } from '@utils/types';

import { sectionsList } from '../data/sectionsList';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function getSections(req: NextApiRequest, res: NextApiResponse<SectionType>) {
  res.status(200).json(sectionsList);
}
