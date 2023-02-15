import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputNumber from '../InputNumber';
import { INPUT } from './constants';

jest.mock('@icons/main/filter/options.svg', () => () => 'OptionsIc');
describe('InputNumber', () => {
  it('Компонент InputNumber использует нативный тег input с типом number', () => {
    render(<InputNumber data-testid={INPUT} />);

    const inputComponent = screen.getByTestId(INPUT);

    expect(inputComponent.tagName).toBe('INPUT');
    expect(inputComponent).toHaveAttribute('type', 'number');
  });

  it('Пробрасываются все пропсы, которые принимает нативный инпут', async () => {
    const onHover = jest.fn();
    const onUnHover = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const id = 'INPUT_ID';
    const name = 'INPUT_NAME';

    render(
      <InputNumber
        onMouseOver={onHover}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOut={onUnHover}
        id={id}
        data-testid={INPUT}
        name={name}
        readOnly
      />,
    );

    const inputComponent = screen.getByTestId(INPUT);

    await userEvent.hover(inputComponent);
    expect(onHover).toBeCalledTimes(1);

    await userEvent.unhover(inputComponent);
    expect(onUnHover).toBeCalledTimes(1);

    await userEvent.tab();
    expect(onFocus).toBeCalledTimes(1);

    await userEvent.tab();
    expect(onBlur).toBeCalledTimes(1);

    expect(inputComponent).toHaveAttribute('id', id);
    expect(inputComponent).toHaveAttribute('name', name);
    expect(inputComponent).toHaveAttribute('readonly');
  });
});
