import { memo } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ApartmentsType } from '@utils/types';
import NextButton, { NextButtonClass } from '@views/Buttons/NextButton';
import Card from '@views/Card';

import MainNotFound from '../MainNotFound';
import styles from './MainSlider.module.scss';

type MainSliderProps = {
  items: ApartmentsType[];
};

interface ArrowProps extends CustomArrowProps {
  prev?: boolean;
}

const MainSlider: React.FC<MainSliderProps> = ({ items }) => {
  const changeContactsModalPosition = (idx = 0) => {
    const contactsModal = document.querySelectorAll<HTMLElement>('[datatype="contacts-modal"]');

    contactsModal.forEach((item) => item.style.removeProperty('left'));

    if (contactsModal[idx]) {
      contactsModal[idx].style.left = '0px';
    }
  };

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

  if (items.length === 0) {
    return <MainNotFound />;
  }

  return (
    <div className={styles.slider}>
      <Slider className={`${styles.slider__list} list`} lazyLoad='ondemand' {...settings}>
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
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

export default memo(MainSlider);
