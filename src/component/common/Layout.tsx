import Footer from './Footer';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

import styled from 'styled-components';
const Layout = () => {
  const location = useLocation();
  console.log(window.location.href);
  const [nowLocation, setnowLocation] = useState('none');
  if (window.location.href === 'http://dsrstudio.com/') {
    return (
      <>
        <Box>
          <Header />
          <Outlet />
          <Footer />
        </Box>
      </>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const Box = styled.div`
  background: #f0f0f0;
`;
export default Layout;
