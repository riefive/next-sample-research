import { getIronSessionLocal } from '@/middlewares/username';

export default async function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1>Home Page</h1>
    </div>
  );
}
