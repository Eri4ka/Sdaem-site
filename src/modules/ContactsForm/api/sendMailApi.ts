import { ContactFormValues } from '@mytypes/mailTypes';
import { API_URL } from '@utils/constants';

export const sendMailApi = async (values: ContactFormValues) => {
  const response = await fetch(`${API_URL}/api/sender`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();

  return data;
};
