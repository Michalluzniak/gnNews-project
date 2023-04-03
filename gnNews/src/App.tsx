import { Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import Layout from './components/Layout';
import NotFound from './modules/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/country/Poland" />} />
        <Route path="/country/:country" element={<Layout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* FOOTER */}
    </div>
  );
}

export default App;
