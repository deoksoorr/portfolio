import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useIntersection, useWindowScroll, useWindowSize } from 'react-use';
import Button from '../common/Button';

const About = () => {
  const { x, y } = useWindowScroll();
  const videoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (videoRef.current) {
      let cWidth = (y / videoRef.current.offsetTop) * 100;
      if (cWidth > 100) {
        cWidth = 100;
      }
      setWidth(cWidth);
    }
  }, [y, videoRef]);
  return (
    <>
      <Box ref={aboutRef}>
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
            <Button btntop="Get to know us" btnbot="ABOUT US" />
          </li>
        </ul>
      </Box>
      <VideoBox ref={videoRef} style={{ width: `${width}vw` }}>
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
        font-size: 1.1vw;
        line-height: 1.2;
      }
      > span {
        display: block;
        font-size: 0.8vw;
        line-height: 1.4;
        color: #2a2a2a;
        margin-bottom: 2vw;
      }
      a {
        .btn-outer {
          .btn-mask.btn-top {
            width: 100px;
          }
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
