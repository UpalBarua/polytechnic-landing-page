import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navLinks } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaChevronDown,
  FaChevronRight,
  FaPhoneAlt,
  FaSchool,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b shadow bg-primary text-background">
      <div className="container flex justify-between items-center py-4 max-w-7xl border-b">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex justify-center items-center w-8 rounded-full shadow aspect-square bg-background/60 text-background">
            <FaSchool className="text-xl" />
          </div>
          <span className="hidden text-xl font-bold capitalize text-foreground sm:inline-block">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </span>
        </Link>
        <div className="text-sm text-foreground/80">
          <div className="flex gap-x-1 items-center">
            <MdEmail className="text-foreground/60" />
            <span>snhpi@snphi.com</span>
          </div>
          <div className="flex gap-x-1 items-center">
            <FaPhoneAlt className="text-foreground/60" />
            <span>01234567890</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-2 bg-background/100">
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

type NavItemProps = (typeof navLinks)[number];

function NavItem({ route, label, subRoutes }: NavItemProps) {
  const pathname = usePathname();

  return subRoutes.length > 0 ? (
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
