import { useState, useEffect, useCallback } from 'react';

type useFirebaseErrorProps = {
  status: string;
  message: string;
};

export const useFirebaseError = ({ status, message }: useFirebaseErrorProps) => {
  const [errorStatus, setErrorStatus] = useState<string>('');

  const getMessage = useCallback(() => {
    switch (message) {
      case 'auth/email-already-in-use':
        setErrorStatus('E-mail уже зарегистрирован');
        break;
      case 'auth/invalid-email':
        setErrorStatus('Невалидный e-mail');
        break;
      case 'auth/wrong-password':
        setErrorStatus('Неверный пароль');
        break;
      case 'auth/user-not-found':
        setErrorStatus('Пользователя не существует');
        break;
      case 'Невалидная капча':
        setErrorStatus('Невалидная капча');
        break;
      default:
        setErrorStatus('Системная ошибка');
        break;
    }
  }, [message]);

  useEffect(() => {
    if (status === 'error') {
      getMessage();
    }
  }, [getMessage, status]);

  return { errorStatus };
};
