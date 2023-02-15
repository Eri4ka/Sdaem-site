import { render, screen } from '@testing-library/react';

import MainGoldCard from '../MainGoldCard';
import { GOLDCRAD_INFO } from './mocks';

jest.mock('@icons/button/arrow.svg', () => () => 'ArrowIc');

const { heading, description, descriptionSecond, buttonText, buttonIcon } = GOLDCRAD_INFO;

describe('MainGoldCard', () => {
  it('Переданные props "heading", "description", "descriptionSecond", "buttonText", "buttonIcon" отображаются корректно', () => {
    render(
      <MainGoldCard
        heading={heading}
        description={description}
        descriptionSecond={descriptionSecond}
        buttonText={buttonText}
        buttonIcon={buttonIcon}
      />,
    );

    const headingValue = screen.getByText(heading);
    const descriptionValue = screen.getByText(/Приоритетное размещение/i);
    const descriptionSecondValue = screen.getByText(/Gold объявления/i);
    const buttonTextValue = screen.getByText(buttonText);
    const buttonIconValue = screen.getByText('ArrowIc');

    expect(headingValue).toBeInTheDocument();
    expect(descriptionValue).toBeInTheDocument();
    expect(descriptionSecondValue).toBeInTheDocument();
    expect(buttonTextValue).toBeInTheDocument();
    expect(buttonIconValue).toBeInTheDocument();
  });
});
