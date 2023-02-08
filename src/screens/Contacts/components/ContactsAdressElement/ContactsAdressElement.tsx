import styles from './ContactsAdressElement.module.scss';

type ContactsAdressElementProps = {
  children: React.ReactNode;
};

const ContactsAdressElement: React.FC<ContactsAdressElementProps> = ({ children }) => {
  return <div className={styles['contacts-address__element']}>{children}</div>;
};

export default ContactsAdressElement;
