import { useState, useEffect } from 'react';

import {
  DESKTOP_VIEW,
  DESKTOP_MINIMUM,
  TABLET_LARGE,
  TABLET_MEDIUM,
  TABLET_MINIMUM,
  MOBILE_LARGE,
  MOBILE_MEDIUM,
} from '@utils/constants';

export const useResize = () => {
  const hasWindow = typeof window !== 'undefined';

  const [width, setWidth] = useState(hasWindow ? window.innerWidth : null);

  const isDesktopView = width && width <= DESKTOP_VIEW;
  const isDesktopMinimum = width && width <= DESKTOP_MINIMUM;
  const isTabletLarge = width && width <= TABLET_LARGE;
  const isTabletMedium = width && width <= TABLET_MEDIUM;
  const isTabletMinimum = width && width <= TABLET_MINIMUM;
  const isMobileLarge = width && width <= MOBILE_LARGE;
  const isMobileMedium = width && width <= MOBILE_MEDIUM;

  useEffect(() => {
    const handleResize = (e: Event) => {
      const target = e.target as Window;
      setWidth(target.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isDesktopView,
    isDesktopMinimum,
    isTabletLarge,
    isTabletMedium,
    isTabletMinimum,
    isMobileLarge,
    isMobileMedium,
  };
};
