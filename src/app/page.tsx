import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

export default function Main() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 text-center'>
      <ul>
        <li>
          <Link href='/home'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/sample'>Sample</Link>
        </li>
        <li>
          <Link href='/cookie'>Sample Cookie</Link>
        </li>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link href='/dashboard-simple'>Dashboard Simple</Link>
        </li>
        <li>
          <Link href='/something-wrong'>Something Wrong</Link>
        </li>
      </ul>
      <div className='App'>
        <Button type='primary'>Button</Button>
      </div>
    </div>
  );
}
