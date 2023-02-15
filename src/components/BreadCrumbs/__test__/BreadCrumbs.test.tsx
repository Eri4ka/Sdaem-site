import { render, screen } from '@testing-library/react';

import BreadCrumbs from '../BreadCrumbs';
import { CRUMB_LIST } from './constants';

jest.mock('@icons/home.svg', () => () => 'HomeIcon');
describe('BreadCrumbs', () => {
  it('Переданный через props список хлебных крошек отображается корректно', () => {
    render(<BreadCrumbs crumbList={CRUMB_LIST} pathname='/' />);

    const BreadCrumbsItem = screen.getByText(CRUMB_LIST[1].title);
    expect(BreadCrumbsItem).toBeInTheDocument();

    expect(BreadCrumbsItem.closest('a')).toHaveAttribute('href', CRUMB_LIST[1].path);
  });
  it('Хлебная крошка, которая совпадает с текущим pathname, имеет активный класс', () => {
    render(<BreadCrumbs crumbList={CRUMB_LIST} pathname='/minsk' />);

    const listElements = screen.getAllByRole('listitem');

    expect(listElements[1]).toHaveClass('breadcrumbs__item_active');
  });
});
