import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from '../Pagination';

const onSetPage = (value: number) => value + 1;

jest.mock('@icons/main/filter/options.svg', () => () => 'OptionsIc');
describe('Pagination', () => {
  it('props "page" пробрасывается корректно', () => {
    const setPage = jest.fn().mockImplementation(onSetPage);

    render(<Pagination totalPages={5} page={1} setPage={setPage} />);

    const PaginationComponent = screen.getByText(1);

    expect(PaginationComponent).toHaveClass('pagination__page_active');
  });
  it('При клике вызывается функция setPage', async () => {
    const setPage = jest.fn().mockImplementation(onSetPage);

    render(<Pagination totalPages={5} page={1} setPage={setPage} />);

    const PaginationComponent = screen.getByText(1);

    await userEvent.click(PaginationComponent);
    expect(setPage).toBeCalled();
  });

  it('Значение props "page" зависит от setPage и отрабатывает корректно', async () => {
    const setPage = jest.fn().mockImplementation(onSetPage);
    const newPageValue = setPage(1);

    render(<Pagination totalPages={5} page={newPageValue} setPage={setPage} />);

    const PaginationComponent = screen.getByText(newPageValue);
    expect(PaginationComponent).toHaveClass('pagination__page_active');
  });
  it('При клике на страницу вызывается setPage с добавленной страницей', async () => {
    const setPage = jest.fn().mockImplementation(onSetPage);

    render(<Pagination data-testid={'pagination'} totalPages={5} page={1} setPage={setPage} />);

    const PaginationComponent = screen.getByText(1);

    await userEvent.click(PaginationComponent);
    expect(setPage).toBeCalledWith(1);
  });
});
