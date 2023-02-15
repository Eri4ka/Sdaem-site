import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import { declinationCityName } from '@helpers/declinationCityName';
import { useToggle } from '@hooks/useToggle';
import { SingleSectionType } from '@mytypes/sectionTypes';

import styles from './HeaderSelect.module.scss';

type HeaderSelectProps = {
  title: string;
  children: React.ReactNode;
  items: SingleSectionType[];
};

const HeaderSelect: React.FC<HeaderSelectProps> = ({ title, children, items }) => {
  const { toggle, handleToggle, triggerRef } = useToggle({});
  const {
    query: { alias },
  } = useRouter();

  const activeItem = items.filter((item) => item.alias === alias)[0];

  const currentTitle = () => (activeItem ? activeItem.content : title);

  return (
    <div className={styles['header-select']}>
      <div
        ref={triggerRef}
        className={`${styles['header-select__title']} ${
          activeItem ? styles['header-select__title_active'] : ''
        }`}
        onClick={handleToggle}>
        {currentTitle()}
        {children}
      </div>
      {toggle && (
        <div className={styles['header-select__list']}>
          {items.map(({ id, alias, title: city }) => {
            const cityName = declinationCityName(city);
            const transformedTitle = `${title} в ${cityName}`;

            return (
              <Link className={styles['header-select__link']} href={`/${alias}`} key={id}>
                <div className={styles['header-select__item']}>{transformedTitle}</div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(HeaderSelect);
