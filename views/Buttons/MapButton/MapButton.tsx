import styles from './MapButton.module.scss';

export enum MapButtonClass {
  yellow = 'map-button_yellow',
  blue = 'map-button_blue',
}

type MapButtonProps = React.PropsWithChildren<{
  className: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const MapButton: React.FC<MapButtonProps> = ({ children, className }) => {
  return (
    <button className={`${styles['map-button']} ${styles[className]}`}>
      <span className={styles['map-button__text']}>{children}</span>
    </button>
  );
};

export default MapButton;
