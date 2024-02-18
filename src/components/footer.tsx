import { mainNavLinks } from "@/config";
import Link from "next/link";
import { Logo } from "./ui/logo";
import Image from "next/image";

const socialLinks = [
  {
    href: "facebook.com",
    icon: "/icons/facebook.png",
  },
  {
    href: "instagram.com",
    icon: "/icons/instagram.png",
  },
  {
    href: "whatsapp.com",
    icon: "/icons/whatsapp.png",
  },
] as const;

export function Footer() {
  return (
    <footer className="z-10 mt-auto bg-background py-16 shadow-lg">
      <div className="container grid max-w-7xl grid-cols-1 justify-center gap-12 sm:grid-cols-2 lg:grid-cols-6">
        <Logo className="hidden h-28 w-28 lg:block" />
        {mainNavLinks.map(
          ({ subRoutes, label }) =>
            subRoutes.length > 0 && (
              <div key={label} className="flex flex-col gap-y-2">
                <h3 className="pb-1 font-medium">{label}</h3>
                {subRoutes.map(({ label, route }) => (
                  <Link
                    key={route}
                    href={route}
                    className="text-foreground/60 underline-offset-2 hover:text-foreground/80 hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ),
        )}
        <div>
          <h3 className="pb-2 font-medium">যোগাযোগ মাধ্যম</h3>
          <div className="flex items-center gap-x-4">
            {socialLinks.map(({ href, icon }) => (
              <Link href={href} key={href} className="hover:opacity-80">
                <Image src={icon} alt={href} height={25} width={25} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
