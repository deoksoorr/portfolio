import styled from 'styled-components';

const Title = () => {
  return (
    <Box>
      <div className="lineMask">
        <div>
          <span>A</span>
        </div>
        &nbsp;
        <div>
          <span>DIGITAL</span>
        </div>
        &nbsp;
        <div>
          <span>DESIGN</span>
        </div>
        &nbsp;
        <div>
          <span>STUDIO</span>
        </div>
      </div>
      <div className="lineMask">
        <div>
          <span>DRIVEN</span>
        </div>
        &nbsp;
        <div>
          <span>BY</span>
        </div>
        &nbsp;
        <div>
          <span>RESEARCH</span>
        </div>
        &nbsp;
        <div>
          <span>&</span>
        </div>
      </div>
      <div className="lineMask">
        <div>
          <span>STRATEGY</span>
        </div>
      </div>
    </Box>
  );
};

const Box = styled.div`
  margin: 0 auto;
  padding-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;

  font-size: 6vw;
  line-height: 0.8;
  font-weight: 400;
  .lineMask {
    overflow: hidden;
    > div {
      display: inline-block;
    }
  }
  .sub {
    font-size: 13px;
  }
`;

export default Title;
