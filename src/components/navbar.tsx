import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { NavLink } from '@/config';
import { navLinks } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight, FaSchool } from 'react-icons/fa';
import MobileNav from './mobile-nav';
import { FaChevronDown } from 'react-icons/fa';

export function Navbar() {
  return (
    <header className="border-b py-5 fixed w-full left-0 top-0 bg-white shadow-sm z-10">
      <div className="container flex gap-y-4 flex-col items-center justify-center max-w-6xl">
        <Link href="/" className="flex items-center mr-8 space-x-3">
          <FaSchool className="text-4xl" />
          <span className="hidden text-2xl font-bold capitalize sm:inline-block">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </span>
        </Link>
        <nav className="hidden gap-x-2 items-center text-sm md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.route} {...link} />
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function NavItem({ route, label, subRoutes }: NavLink) {
  const pathname = usePathname();

  return subRoutes ? (
    <DropdownMenu key={route}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="sm"
          className={cn(
            'text-base hover:text-foreground/80',
            pathname?.startsWith('/docs/components')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}>
          <span>{label}</span>
          <FaChevronDown className="text-xs" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {subRoutes.map(({ route, label }) => (
          <DropdownMenuItem key={route}>{label}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      variant="link"
      size="sm"
      className={cn(
        'text-base hover:text-foreground/80',
        pathname?.startsWith('/docs/components')
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
      asChild>
      <Link href={route}>
        <span>{label}</span>
        <FaChevronRight className="text-xs" />
      </Link>
    </Button>
  );
}
