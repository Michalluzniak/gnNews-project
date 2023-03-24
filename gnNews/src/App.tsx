import './app.css';
import Layout from './components/Layout';
import Searchbar from './components/Header/Searchbar';
import News from './modules/News';
import CoutriesSidebar from './components/Sidebar/CoutriesSidebar';

function App() {
  return (
    <div className="app">
      <Layout>
        {/* HEADER */}
        <div className="d-flex overflow-hidden position-relative">
          <CoutriesSidebar />

          <div>
            <Searchbar></Searchbar>
          </div>
          <div className="news flex-grow-1 overflow-scroll h-100 bg-white  ">
            <News></News>
          </div>

          {/* SIDEBAR */}
          {/* MAIN */}
          {/* FOOTER */}
        </div>
      </Layout>
    </div>
  );
}

export default App;
