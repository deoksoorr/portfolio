import ReactDOM from 'react-dom/client';
import GlobalStyles from './style/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Layout from './component/common/Layout';
import Detail from './routes/detail';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:name" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
