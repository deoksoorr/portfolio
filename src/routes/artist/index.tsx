import React from 'react';
import styled from 'styled-components';
import List from '../../component/artist/List';
const index = () => {
  return (
    <Box>
      <List />
    </Box>
  );
};

const Box = styled.div`
  background: #f0f0f0;
`;
export default index;
