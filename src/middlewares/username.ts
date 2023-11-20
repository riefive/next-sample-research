// Next.js Server Components and Server Actions (App Router)
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

async function getIronSessionLocal() {
  const session: any = await getIronSession(cookies(), {
    password: 'eaKnkiJ3QXWrY1VFoMsLMPUTwvKY85Dd',
    cookieName: 'my_cookie',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  });
  session.username = 'Testing';
  await session.save();
}

export { getIronSessionLocal };
