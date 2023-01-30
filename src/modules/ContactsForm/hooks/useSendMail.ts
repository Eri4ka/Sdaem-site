import { useCallback, useState } from 'react';

import { ContactFormValues, MailStatusType } from '@mytypes/mailTypes';

import { sendMailApi } from '../api/sendMailApi';

export const useSendMail = () => {
  const [responseMessage, setResponseMessage] = useState<MailStatusType>({
    status: '',
    message: '',
  });
  const [requestLoading, setRequestLoading] = useState<boolean>(false);

  const onSendMail = useCallback(async (values: ContactFormValues) => {
    setRequestLoading(true);
    const data = await sendMailApi(values);
    setResponseMessage(data);
    setRequestLoading(false);
  }, []);

  return { responseMessage, requestLoading, onSendMail };
};
