import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-100 w-100">
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
