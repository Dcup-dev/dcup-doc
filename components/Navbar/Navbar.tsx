import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "../Logo/logo";
import { SearchBox } from "../Search/Search";
import { FaGithub } from "react-icons/fa";


export function Navbar() {
  const navLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Logo href={"/"} />
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Logo href="/" />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-8 pt-10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2">

                <Button
                  variant="default"
                  size='lg'
                  className="bg-gradient-to-r from-pink-600 to-blue-600 text-white hover:from-pink-700 hover:to-blue-700 font-extrabold"
                  asChild
                >
                  <Link href={"/docs"}>
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size='icon' asChild variant={'outline'}>
                  <Link href="https://github.com/dcup-dev" target="_blank">
                    <FaGithub />
                  </Link>
                </Button>
              </div>

              <SearchBox btnClass="hidden" boxClass="relative" />
            </div>
          </SheetContent>
        </Sheet>

        {/* Navigation Links */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <SearchBox btnClass="block lg:hidden" boxClass="relative hidden lg:block" />

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size='lg'
              className="bg-gradient-to-r from-pink-600 to-blue-600 text-white hover:from-pink-700 hover:to-blue-700 font-extrabold"
              asChild
            >
              <Link href={"/docs"}>
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Link href="https://github.com/dcup-dev" target="_blank">
              <FaGithub className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
