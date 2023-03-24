import './app.css';
import Layout from './components/Layout';
import Searchbar from './components/Header/Searchbar';

function App() {
  return (
    <div className="app">
      <Layout>
        {/* HEADER */}
        <div>
          <Searchbar></Searchbar>
        </div>
        <div className="news flex-grow-1  mx-3"></div>

        {/* SIDEBAR */}
        {/* MAIN */}
        {/* FOOTER */}
      </Layout>
    </div>
  );
}

export default App;
