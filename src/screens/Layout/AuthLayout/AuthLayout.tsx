import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className={styles.auth}>{children}</div>
    </main>
  );
};

export default AuthLayout;
