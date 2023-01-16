import { memo } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import NextButton, { NextButtonClass } from '@views/Buttons/NextButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './CardSlider.module.scss';

type CardSliderProps = {
  children: React.ReactNode;
};

interface ArrowProps extends CustomArrowProps {
  prev?: boolean;
}

type DotsProps = {
  dots: React.ReactNode;
};

type SingleDotProps = {
  i: number;
};

const CardSlider: React.FC<CardSliderProps> = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow prev />,
    arrows: true,
    dots: true,
    appendDots: (dots: React.ReactNode) => <Dots dots={dots} />,
    customPaging: (i: number) => <SingleDot i={i} />,
  };

  return (
    <Slider className={`${styles.slider} list`} lazyLoad='ondemand' {...settings}>
      {children}
    </Slider>
  );
};

const Arrow: React.FC<ArrowProps> = memo((props) => {
  const { onClick, prev } = props;

  const clazz = `${styles.slider__button} ${
    prev ? styles.slider__button_prev : styles.slider__button_next
  }`;

  return (
    <div className={clazz}>
      <NextButton className={NextButtonClass.grey} onClick={onClick} prev={prev} />
    </div>
  );
});

const Dots: React.FC<DotsProps> = memo(({ dots }) => {
  return <ul className={`list ${styles.dots}`}>{dots}</ul>;
});

const SingleDot: React.FC<SingleDotProps> = memo(({ i }) => {
  return <div className={styles.dots__button}>{i}</div>;
});

Arrow.displayName = 'Arrow';
Dots.displayName = 'Dots';
SingleDot.displayName = 'SingleDot';

export default CardSlider;
