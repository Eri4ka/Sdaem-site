import { render } from '@testing-library/react';

import CategoryCards from '../components/CatergoryCards';
import { sectionsList } from './mocks';

jest.mock('@icons/news/search/search.svg', () => () => 'SearchIcon');
describe('CategoryCards', () => {
  it('У первого и последнего элемента присутсвует className "category__cards-card_wide"', () => {
    render(<CategoryCards sections={sectionsList} withCities='apartments' />);

    const cardsComponents = document.querySelectorAll('.category__cards-card');

    const firstItem = cardsComponents[0];
    const lastItem = cardsComponents[cardsComponents.length - 1];

    expect(firstItem).toHaveClass('category__cards-card_wide');
    expect(lastItem).toHaveClass('category__cards-card_wide');
  });
});
