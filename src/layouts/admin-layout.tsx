import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { adminNavLinks } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-screen w-full shrink-0 md:sticky md:block bg-background/80">
        <ScrollArea className="h-full py-6 pr-6 lg:py-8">
          <nav
            className={cn(
              'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1'
            )}>
            {adminNavLinks.map((navLink) => (
              <NavLink key={navLink.label} {...navLink} />
            ))}
          </nav>
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}

type NavLinkProps = (typeof adminNavLinks)[number];

function NavLink({ Icon, href, label }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        pathname === href
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-transparent hover:underline',
        'justify-start'
      )}>
      <Icon />
      <span>{label}</span>
    </Link>
  );
}
