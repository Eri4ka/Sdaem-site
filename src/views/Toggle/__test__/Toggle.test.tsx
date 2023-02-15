/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from '@testing-library/react';
import { useField } from 'formik';

jest.mock('formik');
import Toggle from '../Toggle';

jest.mock('@icons/catalog/sorting/list.svg', () => () => 'ListIc');

describe('Toggle', () => {
  it('Значение чекбокса зависит от props "checked"', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: true,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
    };
    // @ts-ignore
    useField.mockReturnValue([mockField, mockMeta]);
    render(<Toggle name='agreement' data-testid={'checkbox'} />);

    const checkBoxElement = screen.getByTestId('checkbox');
    expect(checkBoxElement).toHaveAttribute('checked');
  });
  it('При передаче disabled проставляется атрибут disabled на чекбоксе', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: true,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
    };
    // @ts-ignore
    useField.mockReturnValue([mockField, mockMeta]);
    render(<Toggle name='agreement' data-testid={'checkbox'} disabled />);

    const checkBoxElement = screen.getByTestId('checkbox');
    expect(checkBoxElement).toHaveAttribute('disabled');
  });
});
