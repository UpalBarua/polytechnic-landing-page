import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mainNavLinks, type NavLink } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./ui/logo";

export function Navbar() {
  return (
    <header
      className="fixed left-0 top-0 z-20 w-full bg-background/95"
      data-aos="fade-down"
      data-duration="10"
    >
      <div className="container flex max-w-7xl items-center justify-between py-2 shadow-md">
        <Link href="/" className="flex items-center gap-x-2">
          <Logo />
          <span className="hidden text-2xl font-medium capitalize italic text-primary sm:inline-block">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </span>
        </Link>
        <div className="hidden items-center gap-x-8 md:flex">
          <div className="flex items-center gap-x-2.5">
            <MdOutlineEmail className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Email Us</span>
              <span className="text-sm font-medium">snhpi@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2.5">
            <MdOutlineLocalPhone className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Call Us</span>
              <span className="text-sm font-medium">01234567890</span>
            </div>
          </div>
        </div>
        <MobileNav />
      </div>
      <nav className="hidden gap-x-2 bg-primary/90 py-1 text-sm shadow-md w-full items-center justify-center lg:flex">
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
          className={cn("text-base text-background/80 hover:text-background")}
        >
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
                variant: "link",
                size: "sm",
                className:
                  "!text-base !text-foreground/80 hover:!text-foreground/80",
              })}
            >
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
        variant: "link",
        size: "sm",
        className: "!text-base !text-background/80 hover:!text-background",
      })}
    >
      <span>{label}</span>
      <FaChevronRight className="text-xs text-background/80" />
    </Link>
  );
}
