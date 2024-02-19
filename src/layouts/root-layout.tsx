import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import * as React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <React.Fragment>
      <div className="relative z-10 flex h-screen flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </div>
      <div className="fixed inset-0 h-full w-full bg-[url('/bg-gradient.png')] bg-cover bg-center opacity-30" />
    </React.Fragment>
  );
}
