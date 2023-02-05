import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CategorySection from '../components/CategorySection';
import { categoryList } from './mocks';

jest.mock('@icons/main/category/arrow.svg', () => () => 'ArrowIc');
describe('CategorySection', () => {
  it('Props "head" и "category" просбрасываются и отображаются корректно', () => {
    render(<CategorySection head='Квартиры' category={categoryList} />);

    const transformedTitle = categoryList[0].content.replace(/\на сутки/g, '').replace(' ', '');

    const categoryElement = screen.getByRole('link', { name: transformedTitle });
    const headElement = screen.getByText('Квартиры');

    expect(categoryElement).toBeInTheDocument();
    expect(headElement).toBeInTheDocument();
  });
  it('Клик на "Еще" и "Скрыть" отрабатывает корректно', async () => {
    render(<CategorySection head='Квартиры' category={categoryList} isSlice />);

    const toggleElement = document.querySelector('.section__toggle');

    if (toggleElement) {
      await userEvent.click(toggleElement);
    }

    const hideText = screen.getByText('Скрыть');
    expect(hideText).toBeInTheDocument();

    if (toggleElement) {
      await userEvent.click(toggleElement);
    }

    const showText = screen.getByText('Еще');
    expect(showText).toBeInTheDocument();
  });
});
