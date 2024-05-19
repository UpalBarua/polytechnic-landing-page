import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { campusInfo, mainNavLinks, type NavLink } from "@/config";
import { getLatestNotices } from "@/lib/services";
import { cn } from "@/lib/utils";
import { TNotice } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./ui/logo";
import { m } from "framer-motion";

export function Navbar() {
  const { name, emails, contactNumbers } = campusInfo;
  const [latestNotices, setLatestNotices] = useState<TNotice[]>([]);

  useEffect(() => {
    const fetchLatestNotices = async () => {
      const fetchedNotices = await getLatestNotices();
      setLatestNotices(fetchedNotices);
    };

    fetchLatestNotices();
  }, []);

  return (
    <m.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-20 w-full border-b bg-background/95
      shadow-md backdrop-blur-md transition-transform duration-500"
    >
      <div className="container flex max-w-7xl items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-x-3">
          <Logo className="h-11 w-11 lg:h-14 lg:w-14" />
          <span className="hidden text-2xl font-bold capitalize text-primary sm:inline-block">
            {name}
          </span>
        </Link>
        <div className="hidden items-center gap-x-8 pe-2 lg:flex">
          <a
            className="group flex items-center gap-x-2.5"
            href={"mailto:" + emails[0]}
          >
            <MdOutlineEmail className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Email Us</span>
              <span className="text-sm font-medium underline-offset-2 group-hover:underline">
                {emails[0]}
              </span>
            </div>
          </a>
          <a
            className="group flex items-center gap-x-2.5"
            href={"tel:" + contactNumbers[0]}
          >
            <FiPhone className="text-3xl text-foreground/80" />
            <div className="flex flex-col">
              <span className="text-xs">Call Us</span>
              <span className="text-sm font-medium underline-offset-2 group-hover:underline">
                {contactNumbers[0]}
              </span>
            </div>
          </a>
        </div>
        <MobileNav />
      </div>
      <nav className="hidden w-full items-center justify-center gap-x-2 bg-primary py-1 text-sm shadow-md lg:flex">
        {mainNavLinks.map((link, i) => (
          <NavItem key={link.route + i} {...link} />
        ))}
      </nav>
      <div className="hidden w-full items-center justify-center gap-x-2 py-2 shadow-md lg:flex">
        <Marquee className="max-w-7xl">
          {latestNotices.length
            ? latestNotices.map(({ id, title }) => (
                <p className="pr-4" key={id}>
                  {title}
                </p>
              ))
            : "কোন সাম্প্রতিক নোটিশ নেই"}
        </Marquee>
      </div>
    </m.header>
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
                  "w-full justify-between !text-base !text-foreground/80 hover:!text-foreground/80",
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
