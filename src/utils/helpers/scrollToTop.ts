export const scrollToTop = (top: number, left: number) => {
  if (typeof window !== 'undefined') {
    return window.scrollTo({
      top,
      left,
      behavior: 'smooth',
    });
  }
};
