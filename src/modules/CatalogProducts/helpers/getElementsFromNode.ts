export const getElementsFromNode = (element: string) => {
  const hasWindow = typeof document !== 'undefined';
  const nodeElements = hasWindow ? document.querySelectorAll<HTMLElement>(element) : null;

  return nodeElements;
};
