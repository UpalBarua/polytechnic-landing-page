import { campusInfo, mainNavLinks } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { Logo } from "./ui/logo";

export function Footer() {
  const { socialLinks } = campusInfo;

  return (
    <InView threshold={0.1}>
      {({ ref, inView }) => (
        <footer
          ref={ref}
          className={cn(
            "z-10 mt-auto bg-background  shadow-lg transition-transform duration-700",
            inView ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="container grid max-w-7xl grid-cols-1 justify-center gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
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
                {socialLinks.map(({ link, icon }) => (
                  <Link href={link} key={link} className="hover:opacity-80">
                    <Image src={icon} alt={link} height={25} width={25} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="block bg-primary py-1 text-center text-sm font-medium text-background"
          >
            Wellup Tech Lab
          </Link>
        </footer>
      )}
    </InView>
  );
}
