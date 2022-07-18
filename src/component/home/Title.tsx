import styled, { keyframes } from 'styled-components';

const Title = () => {
  return (
    <Box>
      <div className="lineMask">
        <div>
          <span className="transition01">A</span>
        </div>
        &nbsp;
        <div>
          <span className="transition02">DIGITAL</span>
        </div>
        &nbsp;
        <div>
          <span className="transition03">DESIGN</span>
        </div>
        &nbsp;
        <div>
          <span className="transition04">STUDIO</span>
        </div>
      </div>
      <div className="lineMask">
        <div>
          <span className="transition05">DRIVEN</span>
        </div>
        &nbsp;
        <div>
          <span className="transition06">BY</span>
        </div>
        &nbsp;
        <div>
          <span className="transition07">RESEARCH</span>
        </div>
        &nbsp;
        <div>
          <span className="transition08">&</span>
        </div>
      </div>
      <div className="lineMask">
        <div>
          <span className="transition09">STRATEGY</span>
        </div>
      </div>
      <div className="subMask">
        <span className="sub">
          &nbsp;&nbsp;BASED IN LONDON + CAPE TOWN WORKING WORLDWIDE
        </span>
      </div>
    </Box>
  );
};

const moveUp = keyframes`
  from{
    top: 85px;
  }
  to{
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
        animation-duration: 0.25s;
        animation-timing-function: ease-in-out;
        animation-name: ${moveUp};
        animation-fill-mode: forwards;
      }
      .transition01 {
        transition-delay: 0.7s;
      }
      .transition02 {
        transition-delay: 1s;
      }
      .transition03 {
        transition-delay: 0.9s;
      }
      .transition04 {
        transition-delay: 1s;
      }
      .transition05 {
        transition-delay: 1.1s;
      }
      .transition06 {
        transition-delay: 1.2s;
      }
      .transition07 {
        transition-delay: 1.3s;
      }
      .transition08 {
        transition-delay: 1.4s;
      }
      .transition09 {
        transition-delay: 1.5s;
      }
    }
  }
  > .subMask {
    line-height: 0;
    .sub {
      font-size: 13px;
      line-height: 13px;
    }
  }
`;

export default Title;
