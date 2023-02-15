import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterOptions from '../FilterOptions';
import { FILTER_OPTIONS } from './constants';

jest.mock('@icons/main/filter/options.svg', () => () => 'OptionsIc');
describe('FilterOptions', () => {
  it('Переданный onClick вызывается при клике', async () => {
    const handleClick = jest.fn();

    render(<FilterOptions data-testid={FILTER_OPTIONS} onClick={handleClick} />);

    const filterOptionsComponent = screen.getByTestId(FILTER_OPTIONS);

    await userEvent.click(filterOptionsComponent);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
