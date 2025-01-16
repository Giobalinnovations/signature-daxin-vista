'use client';

import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems: {
  title: string;
  href: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Floor Plans',
    href: '#floor-plans',
  },
  {
    title: 'Key Highlights',
    href: '#key-highlights',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-border/40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white">
          <Image
            src="/Logo.svg"
            alt="Signature Daxin Vista"
            width={100}
            height={100}
            className={`transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu className="text-white">
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none text-white ${
                        isScrolled ? 'hover:bg-white/10' : 'hover:bg-black/20'
                      }`}
                    >
                      {item.title}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`text-white transition-colors ${
                isScrolled ? 'hover:bg-white/10' : 'hover:bg-black/20'
              }`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-black/95 border-border/40"
          >
            <SheetTitle className="text-white">
              <Image
                src="/Logo.svg"
                alt="Signature Daxin Vista"
                width={100}
                height={100}
                className="mb-8"
              />
            </SheetTitle>
            <nav className="flex flex-col space-y-6 mt-8">
              {navigationItems.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block text-lg text-white hover:text-white/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
