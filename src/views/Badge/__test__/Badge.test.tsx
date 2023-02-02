import { render, screen } from '@testing-library/react';

import Badge from '../Badge';
import { BADGE__TEXT, BADGE_TYPE } from './constants';

describe('Badge', () => {
  it('Проверка обязательного props "text"', () => {
    render(<Badge text={BADGE__TEXT} />);

    const badgeText = screen.getByText(BADGE__TEXT);

    expect(badgeText).toBeInTheDocument();
  });

  it('Проверка создаваемого элемента через props', () => {
    render(<Badge type={BADGE_TYPE.district} text={BADGE__TEXT} />);

    const innerElement = screen.getByText('район:');

    expect(innerElement).toBeInTheDocument();
  });

  it('Проверка наличия className, создавемого через prop wide', () => {
    render(<Badge wide text={BADGE__TEXT} />);

    const badgeText = screen.getByText(BADGE__TEXT);

    expect(badgeText).toHaveClass('badge_wide');
  });
});
