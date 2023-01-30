export interface SingleSectionType {
  id: number;
  section_name: string;
  title: string;
  alias: string;
  content: string;
  total?: number;
}

export type SectionType = {
  apartments: SingleSectionType[];
  cottages: SingleSectionType[];
  baths?: SingleSectionType[];
  automobile?: SingleSectionType[];
};

export type SectionListType = 'apartments' | 'cottages' | 'baths' | 'automobile';
