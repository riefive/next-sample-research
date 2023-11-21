// import { getIronSessionLocal } from '@/middlewares/username';
import { cookies } from 'next/headers';

export default async function HomePage() {
  // const session = await getIronSessionLocal();
  // console.log(session);
  const cooks = cookies();
  console.log(cooks.get('token'));
  console.log(cooks.getAll('version'));

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1>Home Page</h1>
    </div>
  );
}
