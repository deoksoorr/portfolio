import React from 'react';
import styled from 'styled-components';
import { useScroll } from 'react-use';

const About = () => {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);
  console.log(y);

  return (
    <>
      <Box>
        <h1>ABOUT</h1>
        <ul>
          <li>
            <p>AN INTERNATIONAL DIGITAL DESIGN STUDIO</p>
            <p>REIMAGINING HOW PEOPLE CONNECT WITH BRANDS.</p>
          </li>
          <li>
            <span>
              We're a small team of curious humans who create work we’re proud
              of for people and brands we believe in. With collaboration at the
              heart of every project, we identify what skills are required and
              then bring the best people together to create something truly
              extraordinary. Combining strategy, branding, web design and
              development, we build digital experiences that transform the way
              people connect and interact with brands.
            </span>
            <div>
              <button type="button" className="btn_about">
                <p>ABOUT US</p>
              </button>
              <button type="button" className="btn_get">
                <p>GET TO NOW US</p>
              </button>
            </div>
          </li>
        </ul>
      </Box>
      <VideoBox>
        <video autoPlay loop muted>
          <source
            src={`videos/20d42b34-60b4-4fdf-a1b3-0cf53a3ba4f1.mp4`}
            type="video/mp4"
          ></source>
        </video>
      </VideoBox>
    </>
  );
};

const Box = styled.div`
  margin: 0 auto;
  margin-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;
  > h1 {
    margin-bottom: 4vw;
    font-size: 4.8vw;
    line-height: 0.8;
    font-weight: 400;
  }
  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > li {
      width: 50%;
      position: relative;
      > p {
        font-size: 1.3vw;
        line-height: 1;
      }
      > span {
        display: block;
        font-size: 1.1vw;
        line-height: 1.2;
        color: #2a2a2a;
        margin-bottom: 2vw;
      }
      > div {
        position: relative;
        font-size: 12px;
        line-height: 14px;
        > button {
          position: absolute;
          padding: 4px 12px;
          clip-path: inset(1px round 9999px);
          transition-delay: 1.5s;
          > p {
            font-size: 11px;
            line-height: 14px;
            font-weight: 300;
          }
        }
        > .btn_about {
          z-index: 10;
          background: #2a2a2a;
          color: #fff;
        }

        > button.btn_get {
          display: none;
        }
      }
    }
  }
`;

const VideoBox = styled.div`
  margin: 0 auto;
  width: 47vw;
  overflow: hidden;
  text-align: center;
  > video {
    width: 100vw;
  }
`;
export default About;
