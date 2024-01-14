import Navbar from '@/components/navbar';

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="container pt-12 max-w-6xl md:pt-16">
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
