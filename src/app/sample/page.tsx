'use client';

import LayoutAntd from '@/components/basics/layout.antd';

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <LayoutAntd></LayoutAntd>;
}
