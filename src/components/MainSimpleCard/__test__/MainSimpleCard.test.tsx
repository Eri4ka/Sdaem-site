import { render, screen } from '@testing-library/react';

import MainSimpleCard from '../MainSimpleCard';
import { SIMPLECARD_INFO } from './mocks';

jest.mock('@icons/main/map/target.svg', () => () => 'TargetIc');

const { heading, icon, buttonText, description } = SIMPLECARD_INFO;

describe('MainSimpleCard', () => {
  it('Переданные props "heading", "description", "descriptionSecond", "buttonText", "buttonIcon" отображаются корректно', () => {
    render(
      <MainSimpleCard
        heading={heading}
        buttonText={buttonText}
        icon={icon}
        description={description}
      />,
    );

    const headingValue = screen.getByText(heading);
    const descriptionValue = screen.getByText(
      /Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно/i,
    );
    const buttonTextValue = screen.getByText(/Разместить объявление/i);
    const buttonIconValue = screen.getByText('TargetIc');

    expect(headingValue).toBeInTheDocument();
    expect(descriptionValue).toBeInTheDocument();
    expect(buttonTextValue).toBeInTheDocument();
    expect(buttonIconValue).toBeInTheDocument();
  });
});
