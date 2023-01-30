export const changeContactsModalPosition = (idx = 0) => {
  const hasDocument = typeof document !== 'undefined';
  const contactsModal = hasDocument
    ? document.querySelectorAll<HTMLElement>('[datatype="contacts-modal"]')
    : null;

  contactsModal?.forEach((item) => item.style.removeProperty('left'));

  if (contactsModal && contactsModal[idx]) {
    contactsModal[idx].style.left = '0px';
  }
};
