import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { mainNavLinks, type NavLink } from '@/config';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 w-auto h-auto text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-background/80 lg:hidden">
          <RiMenu2Line className="text-2xl" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <ScrollArea className="my-8 h-[calc(100vh-4rem)]">
          <div className="flex flex-col space-y-4">
            {mainNavLinks.map((link) => (
              <MobileNavItem key={link.route} {...link} />
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavItem({ route, label, subRoutes }: NavLink) {
  return subRoutes.length > 0 ? (
    <React.Fragment>
      <h4 className="font-bold">{label}</h4>
      {subRoutes.map(({ route, label }) => (
        <Link
          key={route}
          href={route}
          className="ps-2 text-foreground/60 hover:text-foreground/80">
          {label}
        </Link>
      ))}
    </React.Fragment>
  ) : (
    <Link
      key={route}
      href={route}
      className="text-foreground/60 hover:text-foreground/80">
      <span>{label}</span>
    </Link>
  );
}
