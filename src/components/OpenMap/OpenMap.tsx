import Link from 'next/link';
import { memo } from 'react';

import MapButton, { MapButtonClass } from '@views/MapButton';

import styles from './OpenMap.module.scss';

type OpenMapProps = {
  heading: string;
  description: string;
  href: string;
};

const OpenMap: React.FC<OpenMapProps> = ({ heading, description, href }) => {
  return (
    <div className={styles['open-map']}>
      <h2 className={styles['open-map__heading']}>{heading}</h2>
      <p className={styles['open-map__description']}>{description}</p>
      <div className={styles['open-map__button']}>
        <MapButton className={MapButtonClass.yellow}>
          <Link href={href}>Открыть карту</Link>
        </MapButton>
      </div>
    </div>
  );
};

export default memo(OpenMap);
