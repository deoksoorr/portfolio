import ReactDOM from 'react-dom/client';
import GlobalStyles from './style/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Layout from './component/common/Layout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
