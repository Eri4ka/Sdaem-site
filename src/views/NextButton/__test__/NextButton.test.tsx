import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NextButton, { NextButtonClass } from '../NextButton';
import { NEXT_BUTTON } from './constants';

jest.mock('@icons/button/btnArrow.svg', () => () => 'BtnArrowIc');
describe('NextButton', () => {
  it('Пропс className участвует в формировании класса на кнопке', () => {
    const { rerender } = render(
      <NextButton className={NextButtonClass.white} data-testid={NEXT_BUTTON} />,
    );

    const buttonElement = screen.getByTestId(NEXT_BUTTON);

    expect(buttonElement).toHaveClass('next-button_white');

    rerender(<NextButton className={NextButtonClass.blue} data-testid={NEXT_BUTTON} />);

    expect(buttonElement).toHaveClass('next-button_blue');
  });

  it('Переданный onClick вызывается при клике', async () => {
    const handleClick = jest.fn();
    render(
      <NextButton
        className={NextButtonClass.white}
        onClick={handleClick}
        data-testid={NEXT_BUTTON}
      />,
    );

    const buttonElement = screen.getByTestId(NEXT_BUTTON);

    await userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('При disabled=true не вызывается onClick', async () => {
    const handleClick = jest.fn();
    render(
      <NextButton
        className={NextButtonClass.white}
        onClick={handleClick}
        disabled
        data-testid={NEXT_BUTTON}
      />,
    );

    const buttonElement = screen.getByTestId(NEXT_BUTTON);

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
      <NextButton
        className={NextButtonClass.white}
        onMouseOver={onHover}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOut={onUnHover}
        id={id}
        data-testid={NEXT_BUTTON}
      />,
    );

    const buttonElement = screen.getByTestId(NEXT_BUTTON);

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
  it('При prop "prev" добавляется className "next-button_rotated"', () => {
    render(<NextButton prev className={NextButtonClass.white} data-testid={NEXT_BUTTON} />);

    const buttonElement = screen.getByTestId(NEXT_BUTTON);

    expect(buttonElement).toHaveClass('next-button_rotated');
  });
});
