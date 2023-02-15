export const getBreadCrumbsTitle = (
  section_name: string,
  section_title: string,
  cityName: string,
) => {
  switch (section_name) {
    case 'apartments':
      return `Квартиры в ${cityName}`;
    case 'cottages':
      return `${section_title} на сутки`;
    default:
      return section_title;
  }
};
