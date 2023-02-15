import { render, screen } from '@testing-library/react';

import Favorite from '../Favorite';

jest.mock('@icons/card/favorite/heart.svg', () => () => 'HeartIc');
describe('Favorite', () => {
  it('При wide, добавляется класс и комонент отображается корректно', () => {
    const { container } = render(<Favorite wide />);

    const favoriteComponent = container.querySelector('.favorite');
    const wideText = screen.getByText('В закладки');

    expect(favoriteComponent).toHaveClass('favorite_wide');
    expect(wideText).toBeInTheDocument();
  });
  it('Prop isFavorite=true/false, пробрасывается и отображается корректно', () => {
    const { container, rerender } = render(<Favorite wide isFavorite={true} />);

    const favoriteComponent = container.querySelector('.favorite');
    const wideAddedText = screen.getByText('Добавлено');

    expect(favoriteComponent).toHaveClass('favorite_added');
    expect(wideAddedText).toBeInTheDocument();

    rerender(<Favorite wide isFavorite={false} />);

    const wideText = screen.getByText('В закладки');

    expect(favoriteComponent).not.toHaveClass('favorite_added');
    expect(wideText).toBeInTheDocument();
  });
});
