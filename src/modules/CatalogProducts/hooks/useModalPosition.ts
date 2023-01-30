import { useCallback, useEffect, useMemo, useState } from 'react';

import { useAppSelector } from '@redux/reduxHooks';
import { getDesktopMinimum, getTabletMinimum } from '@redux/selectors/systemInfromationSelectors';

import { getElementsFromNode } from '../helpers/getElementsFromNode';

export const useModalPosition = () => {
  const [contactsModal, setContactsModal] = useState<NodeListOf<HTMLElement> | null>();
  const isDesktopMinimum = useAppSelector(getDesktopMinimum);
  const isTabletMinimum = useAppSelector(getTabletMinimum);

  const elementValue = useMemo(() => {
    if (isTabletMinimum) {
      return 1;
    }
    if (isDesktopMinimum) {
      return 3;
    }
    return 4;
  }, [isDesktopMinimum, isTabletMinimum]);

  const changeContactsModalPosition = useCallback(() => {
    contactsModal?.forEach((item, i) => {
      const element = (i + 1) % elementValue === 0 || i === 0;

      item.style.removeProperty('left');

      if (element) {
        item.style.left = '0px';
      }
    });
  }, [contactsModal, elementValue]);

  const onChangeModalPosition = useCallback(() => {
    setContactsModal(getElementsFromNode('[datatype="contacts-modal"]'));
  }, []);

  useEffect(() => {
    changeContactsModalPosition();
  }, [contactsModal, changeContactsModalPosition]);

  return { onChangeModalPosition };
};
