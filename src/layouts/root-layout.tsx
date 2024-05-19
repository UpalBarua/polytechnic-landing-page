import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { LazyMotion, domAnimation } from "framer-motion";
import * as React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <React.Fragment>
      <LazyMotion features={domAnimation}>
        <div className="relative z-10 flex h-screen flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
        <div className="fixed inset-0 h-full w-full bg-[url('/images/bg-gradient.png')] bg-cover bg-center opacity-25" />
      </LazyMotion>
    </React.Fragment>
  );
}
