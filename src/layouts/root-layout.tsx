import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
