import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterBadge from '../FilterBadge';
import { BADGES, NOT_ACTIVE_BADGE, setFunc } from './constants';

jest.mock('@icons/catalog/head/mark.svg', () => () => 'MarkIc');

const badgesKeys = Object.keys(BADGES);
describe('FilterBadge', () => {
  it('Передача props "activeBadge" отрабатывается корректно', () => {
    const onSetFilterValue = jest.fn().mockImplementation(setFunc);
    const { rerender } = render(
      <FilterBadge badges={BADGES} activeBadge={BADGES.id} onSetFilterValue={onSetFilterValue} />,
    );

    const filterBadgeComponent = document.querySelector('.filter-badge');

    expect(filterBadgeComponent).toHaveClass('filter-badge_active');

    rerender(<FilterBadge badges={BADGES} activeBadge='' onSetFilterValue={onSetFilterValue} />);

    expect(filterBadgeComponent).not.toHaveClass('filter-badge_active');

    rerender(
      <FilterBadge
        badges={BADGES}
        activeBadge={NOT_ACTIVE_BADGE}
        onSetFilterValue={onSetFilterValue}
      />,
    );

    expect(filterBadgeComponent).not.toBeInTheDocument();
  });

  it('При клике на неактивный компонент FilterBadge, возвращается ф-ция со значениями фильтра', async () => {
    const onSetFilterValue = jest.fn().mockImplementation(setFunc);
    render(<FilterBadge badges={BADGES} activeBadge='' onSetFilterValue={onSetFilterValue} />);

    const filterBadgeComponent = screen.getByRole('listitem');

    await userEvent.click(filterBadgeComponent);

    expect(onSetFilterValue).toBeCalledWith(
      BADGES.id,
      { [badgesKeys[0]]: BADGES.id, [badgesKeys[3]]: BADGES.priceTo },
      BADGES.heading,
    );
  });
  it('При клике на активный компонент FilterBadge, возвращается ф-ция с пустыми значенями', async () => {
    const onSetFilterValue = jest.fn().mockImplementation(setFunc);
    render(
      <FilterBadge badges={BADGES} activeBadge={BADGES.id} onSetFilterValue={onSetFilterValue} />,
    );

    const filterBadgeComponent = screen.getByRole('listitem');

    await userEvent.click(filterBadgeComponent);

    expect(onSetFilterValue).toBeCalledWith('', {}, '');
  });
  it('Передача props "badges" отрабатывается корректно', async () => {
    const onSetFilterValue = jest.fn().mockImplementation(setFunc);
    const { rerender } = render(
      <FilterBadge badges={BADGES} activeBadge={BADGES.id} onSetFilterValue={onSetFilterValue} />,
    );

    const filterBadgeComponent = screen.getByText(BADGES.title);

    expect(filterBadgeComponent).toBeInTheDocument();

    rerender(
      <FilterBadge
        badges={BADGES}
        activeBadge={NOT_ACTIVE_BADGE}
        onSetFilterValue={onSetFilterValue}
      />,
    );

    expect(filterBadgeComponent).not.toBeInTheDocument();
  });
});
