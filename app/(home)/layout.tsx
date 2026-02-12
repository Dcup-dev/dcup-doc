import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { Navbar } from '@/components/Navbar/Navbar';
import { Announcement } from '@/components/Announcement/Announcement';

export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {

  return <HomeLayout {...baseOptions} className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
  >
    <Navbar />
    <Announcement
      text='dcup – Turn Your Data Into an AI-Powered Assistant. Coming Soon.'
      actionLink='/coming-soon'
      actionTitle='Join Waitlist'
    />
    {children}
  </HomeLayout>;
}
