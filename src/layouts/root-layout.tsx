import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import AOS from "aos";

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  // React.useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
