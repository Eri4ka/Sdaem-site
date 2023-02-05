import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tab from '../components/Tab';
import { tabs, filters } from './mocks';

describe('Tab', () => {
  it('Табы и их экраны пробрасываются и отображаются корректно', () => {
    render(
      <Tab tabs={tabs} initialTab='apartments'>
        {filters.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </Tab>,
    );

    const tabItemElement = screen
      .getAllByRole('listitem')
      .find((listitem) => listitem.textContent === tabs[0].title);

    const tapPanelElement = screen.getByRole('heading', { name: filters[0].title });

    expect(tabItemElement).toBeInTheDocument();
    expect(tapPanelElement).toBeInTheDocument();
  });
  it('При клике на Таб, отображается соответсвующий ему экран', async () => {
    render(
      <Tab tabs={tabs} initialTab='apartments'>
        {filters.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </Tab>,
    );

    const tabItemElement = screen
      .getAllByRole('listitem')
      .find((listitem) => listitem.textContent === tabs[1].title);

    if (tabItemElement) {
      await userEvent.click(tabItemElement);
    }

    const tapPanelElement = screen.getByRole('heading', { name: filters[1].title });

    expect(tabItemElement).toBeInTheDocument();
    expect(tapPanelElement).toBeInTheDocument();
  });
});
