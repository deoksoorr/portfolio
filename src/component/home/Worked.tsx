import React from 'react';
import styled from 'styled-components';

const Worked = () => {
  return (
    <Box>
      <h1>BRANDS WE'VE WORKED WITH</h1>
      <div>
        <div>
          <input type="radio">
            <ul>
              <li>WOOLWORTHS</li>
              <li>RESEARCH - STRATEGY</li>
              <li>MORE+</li>
            </ul>
          </input>
        </div>
      </div>
    </Box>
  );
};

const Box = styled.div`
  margin: 0 auto;
  margin-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;
  > h1 {
    margin-bottom: 4vw;
    font-size: 2.78vw;
    line-height: 0.8;
    font-weight: 400;
  }
`;
export default Worked;
