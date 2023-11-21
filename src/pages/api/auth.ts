import type { NextApiRequest, NextApiResponse } from 'next';
import { getIronSessionLocal } from '@/middlewares/username';

type ResponseData = {
  username: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const session: any = { username: 'Testing from Api' };
  res.status(200).json({ username: session.username });
}
