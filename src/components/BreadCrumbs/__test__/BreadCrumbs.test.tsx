import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { clearURLQueries } from '@helpers/clearURLQueries';

import BreadCrumbs from '../BreadCrumbs';
import { CRUMB_LIST } from './constants';

// const onSetPage = (value: number) => value + 1;

jest.mock('@icons/main/filter/options.svg', () => () => 'OptionsIc');
describe('BreadCrumbs', () => {
  it('Переданный через props список хлебных крошек отображается корректно', () => {
    render(<BreadCrumbs crumbList={CRUMB_LIST} pathname='/' />);

    const BreadCrumbsItem = screen.getByText(CRUMB_LIST[1].title);
    expect(BreadCrumbsItem).toBeInTheDocument();

    expect(BreadCrumbsItem.closest('a')).toHaveAttribute('href', CRUMB_LIST[1].path);
  });
  it('Переданный через props список хлебных крошек отображается корректно', () => {
    render(<BreadCrumbs crumbList={CRUMB_LIST} pathname='/minsk' />);

    const PaginationComponent = screen.getByText(CRUMB_LIST[1].title);
  });

  // it('При клике вызывается функция setPage', async () => {
  //   const setPage = jest.fn().mockImplementation(onSetPage);

  //   render(<Pagination totalPages={5} page={1} setPage={setPage} />);

  //   const PaginationComponent = screen.getByText(1);

  //   await userEvent.click(PaginationComponent);
  //   expect(setPage).toBeCalled();
  // });

  // it('Значение props "page" зависит от setPage и отрабатывает корректно', async () => {
  //   const setPage = jest.fn().mockImplementation(onSetPage);
  //   const newPageValue = setPage(1);

  //   render(<Pagination totalPages={5} page={newPageValue} setPage={setPage} />);

  //   const PaginationComponent = screen.getByText(newPageValue);
  //   expect(PaginationComponent).toHaveClass('pagination__page_active');
  // });
  // it('При клике на страницу вызывается setPage с добавленной страницей', async () => {
  //   const setPage = jest.fn().mockImplementation(onSetPage);

  //   render(<Pagination data-testid={'pagination'} totalPages={5} page={1} setPage={setPage} />);

  //   const PaginationComponent = screen.getByText(1);

  //   await userEvent.click(PaginationComponent);
  //   expect(setPage).toBeCalledWith(1);
  // });
});
//npm test BreadCrumbs
