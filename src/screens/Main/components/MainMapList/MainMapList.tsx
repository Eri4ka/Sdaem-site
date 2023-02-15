import MainGoldCard from '@components/MainGoldCard';
import MainSimpleCard from '@components/MainSimpleCard';
import ArrowIc from '@icons/button/arrow.svg';
import MoveIc from '@icons/main/map/move.svg';
import TargetIc from '@icons/main/map/target.svg';

import styles from './MainMapList.module.scss';

const mapCards = [
  {
    id: 1,
    icon: <TargetIc />,
    heading: 'Начните привлекать клиентов бесплатно!',
    description: (
      <>
        Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно{' '}
        <strong>бесплатно создавать и публиковать</strong> объявления на сайте.
      </>
    ),
    buttonText: `+\xa0\xa0Разместить объявление`,
  },
  {
    id: 2,
    icon: <MoveIc />,
    heading: 'Поднимайте объявления',
    description: (
      <>
        Вы в любое время можете <strong>поднимать</strong> объявления{' '}
        <strong>вверх первой страницы</strong> каталога, они разместятся сразу после платных
        объявлений до тех пор, пока другой пользователь не повторит процедуру.
      </>
    ),
    buttonText: 'Узнать стоимость услуги',
    buttonIcon: <ArrowIc alt='arrow' />,
  },
  {
    id: 3,
    gold: true,
    heading: 'Приоритет Gold',
    description: (
      <>
        Приоритетное размещение <strong>Gold</strong> позволяет{' '}
        <strong>закрепить ваше объявление</strong> в верхней части каталога!
      </>
    ),
    descriptionSecond: (
      <>
        Gold объявления <strong>перемещаются каждые 5 мин</strong> на 1 позицию, что делает
        размещение одинаковым для всех.
      </>
    ),
    buttonText: 'Еще о тарифе Gold',
    buttonIcon: <ArrowIc alt='arrow' />,
  },
];

const MainMapList: React.FC = () => {
  return (
    <ul className={`list ${styles.list}`}>
      {mapCards.map(
        ({ id, gold, icon, heading, description, descriptionSecond, buttonText, buttonIcon }) => {
          if (gold) {
            return (
              <MainGoldCard
                key={id}
                heading={heading}
                description={description}
                descriptionSecond={descriptionSecond}
                buttonText={buttonText}
                buttonIcon={buttonIcon}
              />
            );
          }
          return (
            <MainSimpleCard
              key={id}
              icon={icon}
              heading={heading}
              description={description}
              buttonText={buttonText}
              buttonIcon={buttonIcon}
            />
          );
        },
      )}
    </ul>
  );
};

export default MainMapList;
