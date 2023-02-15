import { render, screen } from '@testing-library/react';

import CardTag from '../CardTag';

describe('CardTag', () => {
  it('Текстовый prop text пробрасывается корректно', () => {
    render(<CardTag text='Минск' />);

    const cardElement = screen.getByText('Минск');

    expect(cardElement).toBeInTheDocument();
  });
});
