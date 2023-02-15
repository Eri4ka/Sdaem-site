import { render, screen } from '@testing-library/react';

import SubmitAuth from '../SubmitAuth';
import {
  SUBMITAUTH_HEAD,
  SUBMITAUTH_BODY_TEXT,
  SUBMITAUTH_BTN_TEXT,
  SUBMITAUTH_PATH,
} from './constants';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
describe('SubmitAuth', () => {
  it('Переданные props "head", "bodyText", "btnText", "path" пробрасываются и отображаются', () => {
    render(
      <SubmitAuth
        head={SUBMITAUTH_HEAD}
        bodyText={SUBMITAUTH_BODY_TEXT}
        btnText={SUBMITAUTH_BTN_TEXT}
        path={SUBMITAUTH_PATH}
      />,
    );

    const head = screen.getByText(SUBMITAUTH_HEAD);
    const bodyText = screen.getByText(SUBMITAUTH_BODY_TEXT);
    const btnText = screen.getByText(SUBMITAUTH_BTN_TEXT);
    const linkElement = screen.getByRole('link');

    expect(head).toBeInTheDocument();
    expect(bodyText).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', SUBMITAUTH_PATH);
  });
});
