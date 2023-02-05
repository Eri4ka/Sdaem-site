import { screen, render } from '@testing-library/react';

import CategorySectionItem from '../components/CategorySectionItem';
import { categoryList } from './mocks';

describe('CategorySectionItem', () => {
  it('Props "href" и "title" просбрасываются и отображаются корректно', () => {
    const { content, total, alias } = categoryList[0];
    const transformedTitle = content.replace(/\на сутки/g, '').replace(' ', '');

    render(<CategorySectionItem href={`/${alias}`} title={transformedTitle} total={total} />);

    const categoryElement = screen.getByRole('link', { name: transformedTitle });

    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement.closest('a')).toHaveAttribute('href', `/${alias}`);
  });
  it('Наличие и отсутсвие total отрабатывается корректно', () => {
    const { content, total, alias } = categoryList[0];
    const transformedTitle = content.replace(/\на сутки/g, '').replace(' ', '');

    render(<CategorySectionItem href={`/${alias}`} title={transformedTitle} total={total} />);

    const totalElement = screen.getByText(total ?? 0);

    expect(totalElement).toBeInTheDocument();
  });
});
