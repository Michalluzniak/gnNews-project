import './app.css';
import Layout from './components/Layout';
import News from './modules/News';

function App() {
  return (
    <div className="app">
      <Layout>
        {/* HEADER */}
        {/* <div className="d-flex overflow-hidden position-relative"> */}
        <div className="news flex-grow-1 overflow-scroll h-100 bg-white ">
          <News></News>
        </div>

        {/* SIDEBAR */}
        {/* MAIN */}
        {/* FOOTER */}
        {/* </div> */}
      </Layout>
    </div>
  );
}

export default App;
