import { render, screen } from '@testing-library/react';

import CategoryBadge from '../CategoryBadge';
import { CATEGORY_BADGE_TITLE, CATEGORY_BADGE_HREF } from './constants';

describe('CategoryBadge', () => {
  it('Текстовый prop title пробрасывается корректно', () => {
    render(<CategoryBadge title={CATEGORY_BADGE_TITLE} href={CATEGORY_BADGE_HREF.minsk} />);

    const categoryBadgeComponent = screen.getByText(CATEGORY_BADGE_TITLE);

    expect(categoryBadgeComponent).toBeInTheDocument();
  });

  it('Значение href для Link пробрасывается корректно', () => {
    render(<CategoryBadge title={CATEGORY_BADGE_TITLE} href={CATEGORY_BADGE_HREF.minsk} />);

    const categoryBadgeComponent = screen.getByText(CATEGORY_BADGE_TITLE);

    expect(categoryBadgeComponent.closest('a')).toHaveAttribute('href', CATEGORY_BADGE_HREF.minsk);
  });
});
