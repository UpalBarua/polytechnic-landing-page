import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { campusInfo, mainNavLinks, type NavLink } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./ui/logo";

export function Navbar() {
  const { name, emails, contactNumbers } = campusInfo;

  return (
    <header className="fixed left-0 top-0 z-20 w-full border-b bg-background/95 shadow-lg backdrop-blur-md">
      <div className="container flex max-w-7xl items-center justify-between py-2 ">
        <Link href="/" className="flex items-center gap-x-3">
          <Logo className="h-11 w-11 lg:h-14 lg:w-14" />
          <span className="hidden text-2xl font-medium capitalize text-primary sm:inline-block">
            {name}
          </span>
        </Link>
        <div className="hidden items-center gap-x-8 pe-2 lg:flex">
          <div className="flex items-center gap-x-2.5">
            <MdOutlineEmail className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Email Us</span>
              <span className="text-sm font-medium">{emails[0]}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2.5">
            <FiPhone className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Call Us</span>
              <span className="text-sm font-medium">
                +880{contactNumbers[0]}
              </span>
            </div>
          </div>
        </div>
        <MobileNav />
      </div>
      <nav className="hidden w-full items-center justify-center gap-x-2 bg-primary py-1 text-sm shadow-md lg:flex">
        {mainNavLinks.map((link) => (
          <NavItem key={link.route} {...link} />
        ))}
      </nav>
    </header>
  );
}

function NavItem({ route, label, subRoutes, target }: NavLink) {
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
        {subRoutes.map(({ route, label, target }) => (
          <DropdownMenuItem
            key={route}
            className="p-1 hover:cursor-pointer focus:bg-primary/20"
          >
            <Link
              href={route}
              target={target}
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
      target={target}
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
