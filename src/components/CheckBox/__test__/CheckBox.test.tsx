import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckBox from '../CheckBox';
import { CHECKBOX, CHECKBOX_FIELD, setFunc } from './constants';

describe('CheckBox', () => {
  it('При клике на чекбокс вызывается ф-ция handleSetValue с необходимым полем и значением true/false', async () => {
    const handleSetValue = jest.fn().mockImplementation(setFunc);
    const { rerender } = render(
      <CheckBox field={CHECKBOX_FIELD} handleSetValue={handleSetValue} data-testid={CHECKBOX} />,
    );

    const checboxComponent = screen.getByTestId(CHECKBOX);

    await userEvent.click(checboxComponent);
    expect(handleSetValue).toBeCalledWith(CHECKBOX_FIELD, true);

    rerender(
      <CheckBox field={CHECKBOX_FIELD} handleSetValue={handleSetValue} data-testid={CHECKBOX} />,
    );

    await userEvent.click(checboxComponent);
    expect(handleSetValue).toBeCalledWith(CHECKBOX_FIELD, false);
  });
  it('При передаче в props initialValue, меняется значение чекбокса', () => {
    const handleSetValue = jest.fn().mockImplementation(setFunc);
    render(
      <CheckBox
        initialValue={true}
        field={CHECKBOX_FIELD}
        handleSetValue={handleSetValue}
        data-testid={CHECKBOX}
      />,
    );

    const checboxComponent = screen.getByTestId(CHECKBOX);
    expect(checboxComponent).toHaveAttribute('checked');
  });
  it('Компонент CheckBox использует html-тег input', () => {
    const handleSetValue = jest.fn().mockImplementation(setFunc);
    render(
      <CheckBox
        initialValue={true}
        field={CHECKBOX_FIELD}
        handleSetValue={handleSetValue}
        data-testid={CHECKBOX}
      />,
    );

    const checboxComponent = screen.getByTestId(CHECKBOX);

    expect(checboxComponent.tagName).toBe('INPUT');
    expect(checboxComponent).toHaveAttribute('type', 'checkbox');
  });
});
