import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from '../Pagination';

const onSetPage = (value: number) => value + 1;

jest.mock('@icons/main/filter/options.svg', () => () => 'OptionsIc');
describe('Pagination', () => {
  it('props "page" пробрасывается корректно', () => {
    const handleSetPage = jest.fn().mockImplementation(onSetPage);

    render(<Pagination totalPages={5} page={1} handleSetPage={handleSetPage} />);

    const PaginationComponent = screen.getByText(1);

    expect(PaginationComponent).toHaveClass('pagination__page_active');
  });
  it('При клике вызывается функция setPage', async () => {
    const handleSetPage = jest.fn().mockImplementation(onSetPage);

    render(<Pagination totalPages={5} page={1} handleSetPage={handleSetPage} />);

    const PaginationComponent = screen.getByText(1);

    await userEvent.click(PaginationComponent);
    expect(handleSetPage).toBeCalled();
  });

  it('Значение props "page" зависит от setPage и отрабатывает корректно', async () => {
    const handleSetPage = jest.fn().mockImplementation(onSetPage);
    const newPageValue = handleSetPage(1);

    render(<Pagination totalPages={5} page={newPageValue} handleSetPage={handleSetPage} />);

    const PaginationComponent = screen.getByText(newPageValue);
    expect(PaginationComponent).toHaveClass('pagination__page_active');
  });
  it('При клике на страницу вызывается setPage с добавленной страницей', async () => {
    const handleSetPage = jest.fn().mockImplementation(onSetPage);

    render(
      <Pagination
        data-testid={'pagination'}
        totalPages={5}
        page={1}
        handleSetPage={handleSetPage}
      />,
    );

    const PaginationComponent = screen.getByText(1);

    await userEvent.click(PaginationComponent);
    expect(handleSetPage).toBeCalledWith(1);
  });
});
