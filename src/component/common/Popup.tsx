import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
interface slideStyle {
  id: string;
  num: string[];
  slideEffect: string;
}

const Popup = ({ id, num }: slideStyle) => {
  const [slide, setSlide] = useState(false);
  const [slideEffect, setslideEffect] = useState('mount');
  const goSlide = () => {
    if (slide === false) {
      setslideEffect('mount');
      setTimeout(() => {
        setSlide(true);
      }, 400);
    } else {
      setslideEffect('unmount');
      setTimeout(() => {
        setSlide(false);
      }, 400);
    }
  };
  return (
    <Box>
      <div className={`box-wrap ${slideEffect}`}>
        <div>
          <button onClick={goSlide}>CLOSE</button>
        </div>
        <div>
          {id}
          {num}
        </div>
      </div>
    </Box>
  );
};

const moveUp2 = keyframes`
  from{
    opacity: 0;
    top: 100vh;
  }
  to{
    opacity: 1;
    top:10vh;
  }
`;
const moveUp3 = keyframes`
  from{
    opacity: 1;
    top: 10vh;
  }
  to{
    opacity: 0;
    top:100vh;
  }
`;
const Box = styled.div`
  transition: all 0.5s;
  display: block;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0vw;
  > div {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    background: #000000;
    border-radius: 20px 20px 0px 0px;
    > div {
      width: 96vw;
      margin: 0 auto;
      position: relative;
      padding-top: 26px;
      > button {
        position: absolute;
        right: 0;
        color: #ffffff;
        font-size: 13px;
      }
    }
  }
  button {
    z-index: 9999;
  }
  .mount {
    animation: 0.75s cubic-bezier(0.76, 0, 0.24, 1) ${moveUp2} forwards;
  }
  .unmount {
    animation: 0.7s cubic-bezier(0.76, 0, 0.24, 1) ${moveUp3} forwards;
  }
`;
export default Popup;
