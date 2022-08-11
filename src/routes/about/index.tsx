import React from 'react';
import styled from 'styled-components';
import Title from '../../component/about/Title';
import About from '../../component/about/About';
import Team from '../../component/home/Team';
import Service from '../../component/about/Service';
const index = () => {
  return (
    <Box>
      <Title />
      <About />
      <Service />
      <Customfont>
        <Team />
      </Customfont>
    </Box>
  );
};

const Box = styled.div`
  background: #f0f0f0;
`;

const Customfont = styled.div`
  > div {
    > h1 {
      font-size: 4.8vw;
    }
  }
`;

export default index;
