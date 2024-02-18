import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import * as React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <React.Fragment>
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
}
