import { render, screen } from '@testing-library/react';

import Caution from '../Caution';
import { CAUTION_TEXT } from './constants';

jest.mock('@icons/form/caution.svg', () => () => 'CautionIc');
describe('Caution', () => {
  it('Проверка отображения текста через prop "text"', () => {
    render(<Caution text={CAUTION_TEXT} />);

    const cautionText = screen.getByText(CAUTION_TEXT);

    expect(cautionText).toBeInTheDocument();
  });

  it('Проверка вывода ошибки, если передан valid', () => {
    render(<Caution text={CAUTION_TEXT} valid />);

    const cautionText = screen.getByText('Ошибка ввода');

    expect(cautionText).toBeInTheDocument();
  });
});
