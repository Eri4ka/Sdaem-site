import { screen, render } from '@testing-library/react';

import NewsBlock from '../components/NewsBlock';
import { getStringifyDate } from '../helpers/getStringifyDate';
import { newsList } from './mocks';

jest.mock('@icons/button/arrow.svg', () => () => 'ArrowIc');
describe('NewsBlock', () => {
  it('Cписок новостей отображаеся корректно', () => {
    render(<NewsBlock news={newsList} />);

    const titleElement = screen.getByText(newsList[0].title);

    const stringifiedDate = getStringifyDate(newsList[0].published_date);
    const dateElement = screen.getAllByText(stringifiedDate);

    expect(titleElement).toBeInTheDocument();
    expect(dateElement[0]).toBeInTheDocument();
  });
});
