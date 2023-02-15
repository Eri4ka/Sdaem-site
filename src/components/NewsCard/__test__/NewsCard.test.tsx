import { render, screen } from '@testing-library/react';

import { getDescriptionSlice } from '@helpers/getDescriptionSlice';

import NewsCard from '../NewsCard';
import { NEWS_INFO } from './mocks';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
describe('NewsCard', () => {
  it('Переданные props "data" отображается корректно', () => {
    render(<NewsCard data={NEWS_INFO} />);

    const image = screen.getByRole('img');
    const title = screen.getByText(NEWS_INFO.title);
    const published = screen.getByText(NEWS_INFO.published);

    const descriptionSliced = getDescriptionSlice(NEWS_INFO.description, 217);
    const description = screen.getByText(descriptionSliced);

    expect(image).toHaveAttribute('alt', NEWS_INFO.title);
    expect(title).toBeInTheDocument();
    expect(published).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
