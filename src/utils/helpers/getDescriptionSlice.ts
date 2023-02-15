export const getDescriptionSlice = (description: string, count: number) =>
  description.length > count ? description.slice(0, count + 1) + '...' : description;
