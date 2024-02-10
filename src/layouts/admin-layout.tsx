import { AuthForm } from "@/components/auth-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { adminNavLinks } from "@/config";
import { useAuthContext } from "@/context/auth-context";
import { auth } from "@/firebase/firebase.config";
import { cn } from "@/lib/utils";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import * as React from "react";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "sonner";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, isLoading } = useAuthContext();

  if (!isLoading && !user) {
    return (
      <main className="flex h-screen flex-col items-center justify-center">
        <div className="w-[20rem] rounded-md border bg-background/60 p-6 shadow-lg">
          <Heading className="md:text-center">Admin Login</Heading>
          <AuthForm />
        </div>
      </main>
    );
  }

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-0 z-30 -ml-2 hidden h-screen w-full shrink-0 bg-background/60 md:sticky md:block">
        <ScrollArea className="h-full py-6 pr-6 lg:py-8">
          <nav
            className={cn(
              "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
            )}
          >
            {adminNavLinks.map((navLink) => (
              <NavLink key={navLink.label} {...navLink} />
            ))}
          </nav>
          <LogOutButton />
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
        buttonVariants({ variant: "ghost" }),
        pathname === href
          ? "bg-muted hover:bg-muted"
          : "hover:bg-transparent hover:underline",
        "justify-start",
      )}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </Link>
  );
}

function LogOutButton() {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      router.reload();
    } catch (error) {
      console.log(error);
      toast("Failed to logout");
    }
  };

  return (
    <Button
      className="absolute bottom-0 left-0 m-4"
      variant="destructive"
      onClick={handleLogOut}
    >
      <IoMdLogOut className="text-xl" />
      <span>Logout</span>
    </Button>
  );
}
