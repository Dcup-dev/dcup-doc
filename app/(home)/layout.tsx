import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { Navbar } from '@/components/Navbar/Navbar';

export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {

  return <HomeLayout {...baseOptions} className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
  >
    <Navbar />
    {children}
  </HomeLayout>;
}
