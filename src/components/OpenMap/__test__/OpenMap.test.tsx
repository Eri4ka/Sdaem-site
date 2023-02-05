import { render, screen } from '@testing-library/react';

import OpenMap from '../OpenMap';
import { OPENMAP_HEADING, OPENMAP_DESCRIPTION, OPENMAP_HREF } from './constants';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
describe('OpenMap', () => {
  it('Переданные props "heading", "description", "href" пробрасываются и отображаются', () => {
    render(
      <OpenMap heading={OPENMAP_HEADING} description={OPENMAP_DESCRIPTION} href={OPENMAP_HREF} />,
    );

    const heading = screen.getByText(OPENMAP_HEADING);
    const description = screen.getByText(OPENMAP_DESCRIPTION, { collapseWhitespace: false });
    const linkElement = screen.getByText('Открыть карту');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', OPENMAP_HREF);
  });
});
