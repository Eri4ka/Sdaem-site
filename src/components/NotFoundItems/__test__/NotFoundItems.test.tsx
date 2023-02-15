import { render, screen } from '@testing-library/react';

import NotFoundItems from '../NotFoundItems';

jest.mock('@icons/main/items/notfound.svg', () => () => 'NotFoundIc');

describe('NotFoundItems', () => {
  it('Комопнент NotFoundItems отображется', () => {
    render(<NotFoundItems />);

    const notFoundText = screen.getByText('Ничего не найдено');
    expect(notFoundText).toBeInTheDocument();
  });
});
