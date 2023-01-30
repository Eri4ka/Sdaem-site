import { memo } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NotFoundItems from '@components/NotFoundItems';
import ShortCard from '@components/ShortCard';
import { ApartmentsType } from '@mytypes/productTypes';
import NextButton, { NextButtonClass } from '@views/NextButton';

import { changeContactsModalPosition } from '../../helpers/changeContactsModalPosition';
import styles from './ApartmentsSlider.module.scss';

type ApartmentsSliderProps = {
  items: ApartmentsType[];
};

interface ArrowProps extends CustomArrowProps {
  prev?: boolean;
}

const ApartmentsSlider: React.FC<ApartmentsSliderProps> = ({ items }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow prev />,
    arrows: true,
    afterChange: changeContactsModalPosition,
    onInit: changeContactsModalPosition,
    responsive: [
      {
        breakpoint: 1092,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  changeContactsModalPosition();

  if (items.length === 0) {
    return <NotFoundItems />;
  }

  return (
    <div className={styles.slider}>
      <Slider className={`${styles.slider__list} list`} lazyLoad='ondemand' {...settings}>
        {items.map((item) => {
          return <ShortCard key={item.id} item={item} />;
        })}
      </Slider>
    </div>
  );
};

const Arrow: React.FC<ArrowProps> = memo((props) => {
  const { className, onClick, prev } = props;
  const isDisabled = className?.includes('slick-disabled');
  const clazz = `${styles.slider__button} ${
    prev ? styles.slider__button_prev : styles.slider__button_next
  }`;

  return (
    <div className={clazz}>
      <NextButton
        className={NextButtonClass.blue}
        onClick={onClick}
        disabled={isDisabled}
        prev={prev}
      />
    </div>
  );
});

Arrow.displayName = 'Arrow';

export default memo(ApartmentsSlider);
