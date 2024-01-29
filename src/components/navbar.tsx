import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mainNavLinks, type NavLink } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { MobileNav } from './mobile-nav';
import { Logo } from './ui/logo';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocalPhone } from 'react-icons/md';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-primary">
      <div className="container flex justify-between items-center py-2 max-w-7xl shadow-md bg-background">
        <Link href="/" className="flex gap-x-2 items-center">
          <Logo />
          <span className="hidden text-2xl italic font-medium capitalize text-primary sm:inline-block">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </span>
        </Link>
        <div className="md:flex gap-x-8 items-center hidden">
          <div className="flex gap-x-2.5 items-center">
            <MdOutlineEmail className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Email Us</span>
              <span className="text-sm font-medium">snhpi@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-x-2.5 items-center">
            <MdOutlineLocalPhone className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Call Us</span>
              <span className="text-sm font-medium">01234567890</span>
            </div>
          </div>
        </div>
        <MobileNav />
      </div>
      <nav className="hidden gap-x-2 justify-center items-center py-1 w-full text-sm shadow-md bg-primary/90 lg:flex">
        {mainNavLinks.map((link) => (
          <NavItem key={link.route} {...link} />
        ))}
      </nav>
    </header>
  );
}

function NavItem({ route, label, subRoutes }: NavLink) {
  return subRoutes.length > 0 ? (
    <DropdownMenu key={route} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="sm"
          className={cn('text-base text-background/80 hover:text-background')}>
          <span>{label}</span>
          <FaChevronDown className="text-xs text-background/80" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background/95">
        {subRoutes.map(({ route, label }) => (
          <DropdownMenuItem key={route} className="p-1 focus:bg-primary/20">
            <Link
              href={route}
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className:
                  '!text-base !text-foreground/80 hover:!text-foreground/80',
              })}>
              <span>{label}</span>
              <FaChevronRight className="text-xs text-foreground/80" />
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link
      href={route}
      className={buttonVariants({
        variant: 'link',
        size: 'sm',
        className: '!text-base !text-background/80 hover:!text-background',
      })}>
      <span>{label}</span>
      <FaChevronRight className="text-xs text-background/80" />
    </Link>
  );
}
