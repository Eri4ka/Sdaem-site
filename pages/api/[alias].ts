import { ApartmentsType } from '@utils/types';

import { apartmentsList } from './data/apartmentsList';
import { sectionsList } from './data/sectionsList';

import type { NextApiRequest, NextApiResponse } from 'next';

interface NewNextApiRequest extends NextApiRequest {
  query: { alias: string };
}

type ApartmentsSectionType = {
  id: number;
  title: string;
  alias: string;
  content: string;
  catalog: ApartmentsType[];
};

export default function getApartmentsSection(
  req: NewNextApiRequest,
  res: NextApiResponse<ApartmentsSectionType>,
) {
  const { alias } = req.query;

  const section = sectionsList.apartments.filter((item) => item.alias === alias)[0];

  if (!section) {
    res.status(404).end();
  }

  const apartments: ApartmentsType[] = apartmentsList.filter(
    (item) => item.section_id === section?.id,
  );

  if (apartments.length > 0) {
    const apartmentsSection = { ...section, catalog: apartments };
    res.status(200).json(apartmentsSection);
  } else {
    res.status(404).end();
  }
}
