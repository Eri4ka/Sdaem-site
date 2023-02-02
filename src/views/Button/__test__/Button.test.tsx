import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button, { ButtonClass } from '@views/Button';

import { BUTTON, BUTTON_TEXT, BUTTON_CHILDREN } from './constants';

describe('Button', () => {
  it('Текстовый children пробрасывается корректно', () => {
    render(<Button>{BUTTON_TEXT}</Button>);

    const buttonElement = screen.getByText(BUTTON_TEXT);

    expect(buttonElement).toBeInTheDocument();
  });

  it('Элемент children пробрасывается корректно', () => {
    render(
      <Button>
        <span data-testid={BUTTON_CHILDREN}></span>
      </Button>,
    );

    const innerElement = screen.getByTestId(BUTTON_CHILDREN);

    expect(innerElement).toBeInTheDocument();
  });

  it('Пропс className участвует в формировании класса на кнопке', () => {
    const { rerender } = render(
      <Button className={ButtonClass.back} data-testid={BUTTON}>
        {BUTTON_TEXT}
      </Button>,
    );

    const buttonElement = screen.getByTestId(BUTTON);

    expect(buttonElement).toHaveClass('button_back');

    rerender(
      <Button className={ButtonClass.purp} data-testid={BUTTON}>
        {BUTTON_TEXT}
      </Button>,
    );

    expect(buttonElement).toHaveClass('button_purp');
  });

  it('Переданный onClick вызывается при клике', async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} data-testid={BUTTON}>
        {BUTTON_TEXT}
      </Button>,
    );

    const buttonElement = screen.getByTestId(BUTTON);

    await userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('При disabled=true не вызывается onClick', async () => {
    const handleClick = jest.fn();
    render(
      <Button data-testid={BUTTON} onClick={handleClick} disabled>
        {BUTTON_TEXT}
      </Button>,
    );

    const buttonElement = screen.getByTestId(BUTTON);

    await userEvent.click(buttonElement);
    expect(handleClick).not.toBeCalled();
  });

  it('Пробрасываются все пропсы, которые принимает нативная кнопка', async () => {
    const onHover = jest.fn();
    const onUnHover = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const id = 'TEST_ID';

    render(
      <Button
        onMouseOver={onHover}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOut={onUnHover}
        id={id}
        data-testid={BUTTON}>
        {BUTTON_TEXT}
      </Button>,
    );

    const buttonElement = screen.getByTestId(BUTTON);

    await userEvent.hover(buttonElement);
    expect(onHover).toBeCalledTimes(1);

    await userEvent.unhover(buttonElement);
    expect(onUnHover).toBeCalledTimes(1);

    await userEvent.tab();
    expect(onFocus).toBeCalledTimes(1);

    await userEvent.tab();
    expect(onBlur).toBeCalledTimes(1);

    expect(buttonElement).toHaveAttribute('id', id);
  });
});
