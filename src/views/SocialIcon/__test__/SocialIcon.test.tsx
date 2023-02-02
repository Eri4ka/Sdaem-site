import { render, screen } from '@testing-library/react';
import Image from 'next/image';

import lsee from '@icons/main/filter/options.svg';

import SocialIcon, { SocialIconClass } from '../SocialIcon';
import { SOCIALICON_CHILDREN } from './constants';

describe('SocialIcon', () => {
  it('Проверка наличия/отсутствия элемента "a" при переданом prop "link"', () => {
    const { rerender } = render(
      <SocialIcon className={SocialIconClass.blue} href='/link'>
        <Image src={lsee} alt='icon' />
      </SocialIcon>,
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement.hasAttribute('href'));

    rerender(
      <SocialIcon className={SocialIconClass.blue} link={false}>
        <Image src={lsee} alt='icon' />
      </SocialIcon>,
    );

    expect(linkElement).not.toBeInTheDocument();
  });
  it('Элемент children пробрасывается корректно', () => {
    render(
      <SocialIcon className={SocialIconClass.blue}>
        <span data-testid={SOCIALICON_CHILDREN}></span>
      </SocialIcon>,
    );

    const innerElement = screen.getByTestId(SOCIALICON_CHILDREN);

    expect(innerElement).toBeInTheDocument();
  });
});
