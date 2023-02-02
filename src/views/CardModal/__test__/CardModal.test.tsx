import { render } from '@testing-library/react';

import CardModal from '../CardModal';
import { contacts } from './constants';

jest.mock('@icons/card/cardContacts/mail.svg', () => () => 'MailPic');

describe('CardModal', () => {
  it('Изменение className при передаче props "toggle"', () => {
    const { container, rerender } = render(<CardModal contacts={contacts} toggle={false} />);

    const сardModalComponent = container.querySelector('[datatype="contacts-modal"]');

    expect(сardModalComponent).toHaveClass('contacts-modal_hide');

    rerender(<CardModal contacts={contacts} toggle />);

    expect(сardModalComponent).not.toHaveClass('contacts-modal_hide');
  });
});
