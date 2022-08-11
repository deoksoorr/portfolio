import React from 'react';
import styled, { keyframes } from 'styled-components';

const Title = () => {
  return (
    <Box>
      <div className="lineMask">
        <div>
          <span className="transition01">OUR</span>
        </div>
        &nbsp;
        <div>
          <span className="transition02">SOLUTION</span>
        </div>
        &nbsp;
        <div>
          <span className="transition03">IS</span>
        </div>
      </div>
      <div className="lineMask">
        <div>
          <span className="transition04">OPTIMIZED</span>
        </div>
        &nbsp;
        <div>
          <span className="transition05">FOR</span>
        </div>
      </div>
      <div className="lineMask">
        <div>
          <span className="transition06">NFT</span>
        </div>
        &nbsp;
        <div>
          <span className="transition07">PROJECT</span>
        </div>
      </div>
    </Box>
  );
};

const moveUp = keyframes`
  from{
    top: 85px;
  }
  to{
    opacity: 1;
    top:0px;
  }
`;

const Box = styled.div`
  margin: 0 auto;
  padding-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;
  font-size: 6vw;
  line-height: 0.8;
  font-weight: 400;
  > .lineMask {
    overflow: hidden;
    line-height: 5.2vw;
    > div {
      display: inline-block;
      position: relative;
      overflow: hidden;
      span {
        position: relative;
        opacity: 0;
        transform: translateY(85px);
        animation: ${moveUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        font-weight: 100;
      }
      .transition02 {
        animation-delay: 0.05s;
      }
      .transition03 {
        animation-delay: 0.2s;
      }
      .transition04 {
        animation-delay: 0.3s;
      }
      .transition05 {
        animation-delay: 0.4s;
      }
      .transition06 {
        animation-delay: 0.5s;
        color: #ff4f42;
      }
      .transition07 {
        animation-delay: 0.6s;
      }
    }
  }
`;
export default Title;
