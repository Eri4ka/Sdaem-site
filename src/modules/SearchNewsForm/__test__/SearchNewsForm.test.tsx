import { fireEvent, render } from '@testing-library/react';

import SearchNewsForm from '../components/SearchNewsForm';
import { newsList, searchDataFunc } from './mocks';

jest.mock('@icons/news/search/search.svg', () => () => 'SearchIcon');
describe('SearchNewsForm', () => {
  it('При submit в ф-ции setSearchData возвращается корректное значение', () => {
    const setSearchData = jest.fn().mockImplementation(searchDataFunc);
    render(<SearchNewsForm data={newsList} setSearchData={setSearchData} data-testid='sdds' />);

    const formElement = document.querySelector('.search');

    if (formElement) {
      fireEvent.submit(formElement);
    }

    expect(setSearchData).toBeCalledWith(newsList);
  });
});
