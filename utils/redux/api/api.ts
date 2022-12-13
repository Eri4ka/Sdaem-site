import { API_URL } from '@utils/constants';
import { SiginUpValues } from '@utils/types';

export const captchaApi = async (values: SiginUpValues) => {
  const response = await fetch(`${API_URL}/api/captcha`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values.recaptcha),
  });

  if (response.ok) {
    return;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};
