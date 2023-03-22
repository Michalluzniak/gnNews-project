import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-100 w-100 d-flex flex-column align-items-between ">
      <Header></Header>
      <main className="d-flex flex-grow-1 bg-primary ">{children}</main>
      <footer className=" d-flex flex-shrink-1 bg-danger">
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
