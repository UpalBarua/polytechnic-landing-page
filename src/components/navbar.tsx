import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navLinks, type NavLink } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { MobileNav } from './mobile-nav';
import { Logo } from './ui/logo';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b shadow">
      <div className="container flex justify-between items-center bg-primary py-2 max-w-7xl">
        <Link href="/" className="flex items-center gap-x-2">
          <Logo />
          <span className="hidden text-2xl font-medium capitalize italic text-background sm:inline-block">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </span>
        </Link>
        <MobileNav />
      </div>
      <nav className="hidden gap-x-2 justify-center items-center py-1 bg-background/95 text-sm lg:flex">
        {navLinks.map((link) => (
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
          className={cn(
            'text-base text-foreground/60 hover:text-foreground/80'
          )}>
          <span>{label}</span>
          <FaChevronDown className="text-xs text-foreground/40" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {subRoutes.map(({ route, label }) => (
          <DropdownMenuItem key={route} className="p-1 focus:bg-primary/20">
            <Link
              href={route}
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className:
                  '!text-base !text-foreground/60 hover:!text-foreground/80',
              })}>
              <span>{label}</span>
              <FaChevronRight className="text-xs text-foreground/40" />
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
        className: '!text-base !text-foreground/60 hover:!text-foreground/80',
      })}>
      <span>{label}</span>
      <FaChevronRight className="text-xs text-foreground/40" />
    </Link>
  );
}
