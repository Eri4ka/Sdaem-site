export const getStaticTitle = (section_name: string, section_title: string, cityName: string) => {
  switch (section_name) {
    case 'apartments':
      return `Аренда квартир на сутки в ${cityName}`;
    case 'cottages':
      return `${section_title} на сутки`;
    default:
      return section_title;
  }
};
