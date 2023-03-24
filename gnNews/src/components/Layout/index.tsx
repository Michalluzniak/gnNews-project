import Header from '../Header';
import CoutriesSidebar from '../Sidebar/CoutriesSidebar';
import TopNewsSidebar from '../Sidebar/TopNewsSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="d-flex flex-column w-100 h-100">
      <Header></Header>
      <div className="d-flex overflow-hidden w-100 align-self-center">
        <TopNewsSidebar></TopNewsSidebar>
        <main className="d-flex flex-grow-1 flex-column">{children}</main>
        <CoutriesSidebar></CoutriesSidebar>
      </div>
      <footer className="d-flex flex-shrink-1 w-100 bg-dark mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="text-white fs-4 m-0">10:23</p>
            </div>
            <div className="col col d-flex justify-content-end align-items-center ">
              <p className="text-white fs-5 m-0">Total posts: 242</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
