import type { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

import { ResponseData, ContactFormValues } from '@utils/types';
import getEmailTemplate from '@views/EmailTemplate';
import { EMAIL_PASS, EMAIL_USER, EMAIL_RECIPIENT } from '@utils/constants';

interface NewNextApiRequest extends NextApiRequest {
  body: ContactFormValues;
}

export default async function sendEmail(
  req: NewNextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { name, email, message } = req.body;
  const htmlTemplate = getEmailTemplate({ name, email, message });

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailData = {
    from: 'erihasanov@yandex.ru',
    to: EMAIL_RECIPIENT,
    subject: 'Заявка',
    html: htmlTemplate,
  };

  if (req.method === 'POST') {
    await transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        res.status(404).json({
          status: 'error',
          message:
            'Какое-то сообщение о том, что письмо не отправлено, какое-то сообщение, что письмо не отправлено.',
        });
      } else {
        res.status(200).json({
          status: 'success',
          message:
            'Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.',
        });
      }
    });
  }
}
