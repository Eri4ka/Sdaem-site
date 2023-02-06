import { render, screen } from '@testing-library/react';

import CardInfo from '../CardInfo';

describe('CardInfo', () => {
  it('Значение href для Link пробрасывается корректно', () => {
    render(<CardInfo href={'/1'} />);

    const cardInfoComponent = screen.getByText('Подробнее');

    expect(cardInfoComponent.closest('a')).toHaveAttribute('href', '/1');
  });
});
