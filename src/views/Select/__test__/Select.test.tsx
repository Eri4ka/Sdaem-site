import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select, { SelectClass } from '../Select';
import { items, selectFunc } from './constants';

describe('Select', () => {
  it('Отображаются все переданные опции', async () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    render(
      <Select
        selectedValue=''
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');

    await userEvent.click(buttonElement);

    const firstOption = screen.getByText(items[0].title);
    const secondOption = screen.getByText(items[1].title);
    const thirdOption = screen.getByText(items[2].title);

    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();
    expect(thirdOption).toBeInTheDocument();
  });
  it('При клике на опцию, вызывает функция handleSelect', async () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    render(
      <Select
        selectedValue=''
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    const firstOption = screen.getByText(items[0].title);
    await userEvent.click(firstOption);

    expect(handleSelect).toBeCalled();
  });
  it('Проверка перерендера при изменении опций', async () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    const { rerender } = render(
      <Select
        selectedValue=''
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    const firstOption = screen.getByText(items[0].title);
    const secondOption = screen.getByText(items[1].title);
    const thirdOption = screen.getByText(items[2].title);

    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();
    expect(thirdOption).toBeInTheDocument();

    rerender(
      <Select
        selectedValue=''
        items={[items[0], items[2]]}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    expect(firstOption).toBeInTheDocument();
    expect(thirdOption).toBeInTheDocument();
  });
  it('При клике на опцию вызывается ф-ция handleSelect с добавленной опцией', async () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    render(
      <Select
        selectedValue=''
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    const firstOption = screen.getByText(items[0].title);
    await userEvent.click(firstOption);
    expect(handleSelect).toBeCalledWith(items[0].title);

    await userEvent.click(buttonElement);

    const secondOption = screen.getByText(items[1].title);
    await userEvent.click(secondOption);
    expect(handleSelect).toBeCalledWith(items[1].title);
  });
  it('Проверка открытия/закрытия списка опций при клике', async () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    render(
      <Select
        selectedValue=''
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    const firstOption = screen.getByText(items[0].title);
    expect(firstOption).toBeInTheDocument();

    await userEvent.click(buttonElement);

    expect(firstOption).not.toBeInTheDocument();
  });
  it('Проверка синхронизации значения value', () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    render(
      <Select
        selectedValue={items[0].title}
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(items[0].title);
  });
  it('При открытии списка опций добавляет className', async () => {
    const handleSelect = jest.fn().mockImplementation(selectFunc);
    render(
      <Select
        selectedValue=''
        items={items}
        className={SelectClass.filter}
        handleSelect={handleSelect}
      />,
    );

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveClass('select__output_show');
  });
});
