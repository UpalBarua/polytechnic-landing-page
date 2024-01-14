import { navLinks } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSchool } from 'react-icons/fa';
import MobileNav from './mobile-nav';

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b py-2.5 fixed w-full left-0 top-0 bg-white shadow-sm">
      <div className="container flex justify-between items-center max-w-6xl md:justify-start">
        <Link href="/" className="flex items-center mr-8 space-x-2">
          <FaSchool className="text-xl" />
          <span className="hidden font-medium capitalize sm:inline-block">
            Polytechnic Institute
          </span>
        </Link>
        <nav className="hidden gap-x-6 items-center text-sm md:flex">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={i}
              href={href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith('/docs/components')
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}>
              {label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

export default Navbar;
