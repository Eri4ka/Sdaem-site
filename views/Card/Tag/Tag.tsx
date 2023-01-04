import { useMemo, memo } from 'react';

import DotIc from '@public/icons/card/tag/dot.svg';
import MapIc from '@public/icons/card/tag/map.svg';
import MetroIc from '@public/icons/card/tag/metro.svg';
import MapWideIc from '@public/icons/card/tag/metroWide.svg';

import styles from './Tag.module.scss';

type TagProps = {
  type: string;
  text: string;
  wide?: boolean;
};

const Tag: React.FC<TagProps> = ({ type, text, wide = false }) => {
  const getIcon = useMemo(() => {
    switch (type) {
      case 'adress':
        return wide ? (
          <MapWideIc className={styles.tag__icon_wide} />
        ) : (
          <MapIc className={styles.tag__icon} />
        );
      case 'district':
        return <DotIc className={styles.tag__icon} />;
      case 'metro':
        return <MetroIc className={styles.tag__icon} />;
    }
  }, [type, wide]);

  console.log();
  return (
    <div className={styles.tag}>
      {getIcon}
      {text}
    </div>
  );
};

export default memo(Tag);
