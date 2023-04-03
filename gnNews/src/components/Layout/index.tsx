import News from '../../modules/News';
import Header from '../Header';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: React.ReactNode | any;
}

const Layout = () => {
  return (
    <div className="d-flex flex-row w-100 h-100 bg-primary">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1 ">
        <Header></Header>

        <main className="d-flex flex-grow-1 flex-column overflow-hidden m-3 mx-4">
          <div className="news  border-secondary border overflow-scroll bg-white">
            <News></News>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
