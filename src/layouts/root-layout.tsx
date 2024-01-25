import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
