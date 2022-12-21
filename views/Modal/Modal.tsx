import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button, { ButtonClass } from '@views/Buttons/Button';

import styles from './Modal.module.scss';

type ModalProps = {
  visible: boolean;
  handleToggle: () => void;
  head: string;
  bodyText: string;
  btnText: string;
};

const Modal: React.FC<ModalProps> = ({ visible, handleToggle, head, bodyText, btnText }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      timeout={300}
      classNames={{
        enter: styles['modal-enter'],
        enterActive: styles['modal-enterActive'],
        exit: styles['modal-exit'],
        exitActive: styles['modal-exitActive'],
      }}
      unmountOnExit>
      <div ref={nodeRef} className={styles.modal}>
        <div className={styles.modal__wrapper}>
          <h1 className={styles.modal__head}>{head}</h1>
          <p className={styles.modal__text}>{bodyText}</p>
          <div className={styles.modal__button}>
            <Button className={ButtonClass.back} onClick={handleToggle}>
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
