import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, Sparkles } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '../Logo/logo';
import { SearchBox } from '../Search/Search';
import { FaGithub } from 'react-icons/fa';

export function Navbar() {
  const navLinks = [
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms_of_service_and_privacy_policy' },
  ];

  return (
    <>
      <Link
        href="/coming-soon"
        className="relative block w-full overflow-hidden border-b border-primary/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 px-4 py-2 text-center text-sm font-semibold text-white"
      >
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          dcup – Your Data, Smarter. Coming Soon.
          <span className="rounded-full border border-white/40 bg-white/10 px-2 py-0.5 text-xs">Join Waitlist</span>
        </span>
      </Link>

      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <Logo />

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-8 pt-10">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-lg font-medium hover:text-primary">
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-pink-600 text-white" asChild>
                    <Link href="https://app.dcup.dev/">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="icon" asChild variant="outline">
                    <Link href="https://github.com/dcup-dev" target="_blank">
                      <FaGithub />
                    </Link>
                  </Button>
                </div>

                <Button variant="outline" asChild>
                  <Link href="/coming-soon">Join Coming Soon List</Link>
                </Button>

                <SearchBox btnClass="hidden" boxClass="relative" />
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex md:items-center md:gap-7">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <SearchBox btnClass="block lg:hidden" boxClass="relative hidden lg:block" />
            <Button size="sm" variant="outline" asChild>
              <Link href="/coming-soon">Coming Soon</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-pink-600 text-white" asChild>
              <Link href="https://app.dcup.dev/">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Link href="https://github.com/dcup-dev" target="_blank" className="text-foreground/80 hover:text-primary">
              <FaGithub className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
