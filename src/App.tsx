import ReactDOM from 'react-dom';
import GlobalStyles from './style/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Layout from './component/common/Layout';
import About from './routes/about';
import Artist from './routes/artist';
import ScrollToTop from './store/ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="artist" element={<Artist />} />
            {/* <Route path="detail/:name" element={<Detail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
