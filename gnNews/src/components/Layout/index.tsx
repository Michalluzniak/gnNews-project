import News from '../../modules/News';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <div className="d-flex flex-row w-100 h-100 bg-primary">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1 ">
        <Header></Header>

        <main className="d-flex flex-grow-1 flex-column overflow-hidden m-3 mx-4">
          <div className="news position-relative border-secondary border overflow-scroll bg-white flex-grow-1">
            <News></News>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
