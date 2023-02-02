import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SortingView from '../SortingView';
import { SORTINGVIEW_TYPE } from './constants';

jest.mock('@icons/catalog/sorting/list.svg', () => () => 'ListIc');

const onChangeView = (view: string) => view;

describe('SortingView', () => {
  it('В зависимости от переданного prop "type" отображается текст "Список"/"Плитки"', () => {
    const { rerender } = render(
      <SortingView
        type={SORTINGVIEW_TYPE.list}
        view={SORTINGVIEW_TYPE.list}
        onChangeView={onChangeView}
      />,
    );

    const listText = screen.getByText('Список');
    expect(listText).toBeInTheDocument();

    rerender(
      <SortingView
        type={SORTINGVIEW_TYPE.tiles}
        view={SORTINGVIEW_TYPE.tiles}
        onChangeView={onChangeView}
      />,
    );

    const tilesText = screen.getByText('Плитки');
    expect(tilesText).toBeInTheDocument();
  });
  it('Если type === view, то присваивается className "view_focus"', () => {
    const { rerender } = render(
      <SortingView
        type={SORTINGVIEW_TYPE.list}
        view={SORTINGVIEW_TYPE.list}
        onChangeView={onChangeView}
      />,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('view_focus');

    rerender(
      <SortingView
        type={SORTINGVIEW_TYPE.tiles}
        view={SORTINGVIEW_TYPE.list}
        onChangeView={onChangeView}
      />,
    );

    expect(buttonElement).not.toHaveClass('view_focus');
  });
  it('При клике вызывается onChangeView с корректным значением', async () => {
    const changeView = jest.fn().mockImplementation(onChangeView);
    render(
      <SortingView
        type={SORTINGVIEW_TYPE.list}
        view={SORTINGVIEW_TYPE.list}
        onChangeView={changeView}
      />,
    );

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    expect(changeView).toBeCalledWith(SORTINGVIEW_TYPE.list);
  });
});
