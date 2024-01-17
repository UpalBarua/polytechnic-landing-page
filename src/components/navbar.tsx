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
import { FaChevronDown, FaChevronRight, FaSchool } from 'react-icons/fa';
import MobileNav from './mobile-nav';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b shadow bg-primary text-background">
      <div className="container flex py-4 max-w-7xl">
        <Link href="/" className="flex items-center space-x-3">
          <FaSchool className="text-3xl" />
          <span className="hidden text-xl font-bold capitalize text-foreground sm:inline-block">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </span>
        </Link>
      </div>
      <div className="flex justify-center items-center py-2 bg-background/60">
        <nav className="hidden gap-x-2 items-center text-sm md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.route} {...link} />
          ))}
        </nav>
        {/* <MobileNav /> */}
      </div>
    </header>
  );
}

function NavItem({ route, label, subRoutes }: NavLink) {
  const pathname = usePathname();

  return subRoutes ? (
    <DropdownMenu key={route} modal={false}>
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
          <FaChevronDown className="text-xs text-foreground/40" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {subRoutes.map(({ route, label }) => (
          <DropdownMenuItem key={route}>
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
                <FaChevronRight className="text-xs text-foreground/40" />
              </Link>
            </Button>
          </DropdownMenuItem>
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
        <FaChevronRight className="text-xs text-foreground/40" />
      </Link>
    </Button>
  );
}
