import { NEXT_APP_SECRET_KEY } from '@utils/constants';

import type { NextApiRequest, NextApiResponse } from 'next';

interface NewNextApiRequest extends NextApiRequest {
  body: { recaptcha: string };
}

export default async function verifyCaptcha(req: NewNextApiRequest, res: NextApiResponse) {
  const { body } = req;

  const _API_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_APP_SECRET_KEY}&response=${body}`;

  if (req.method === 'POST') {
    try {
      const response = await fetch(_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
      });

      const data = await response.json();

      if (data.success) {
        res.status(200).send('OK');
      } else {
        res.status(422).json({ message: 'Невалидная капча' });
      }
    } catch (e) {
      res.status(422).json({ message: 'Что-то пошло не так' });
      throw e;
    }
  }
}
