import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useWindowScroll } from 'react-use';

const About = () => {
  const { x, y } = useWindowScroll();
  const videoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    console.log('---');
    console.log(y);
    //console.log(videoRef.current?.offsetTop);
    //console.log(videoRef.current?.offsetHeight);
  }, [y]);

  const yScrollEvent = () => {
    //const scroll = aboutRef.current.getBoundingClientRect();
    console.log(scroll);
  };
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
            <div className="btn-outer">
              <div className="btn-mask btn-bottom">
                <div className="btn-text">Get to know us</div>
              </div>
              <div className="btn-mask btn-top">
                <div className="btn-text">ABOUT US</div>
              </div>
            </div>
          </li>
        </ul>
      </Box>
      <VideoBox ref={videoRef}>
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
      > .btn-outer {
        cursor: pointer;
        position: relative;
        .btn-mask {
          position: absolute;
          display: flex;
          padding: 4px 12px;
          justify-content: flex-start;
          align-items: flex-start;
          .btn-text {
            font-size: 12px;
            line-height: 14px;
          }
        }
        .btn-mask.btn-top {
          transition: 0.5s;
          border-radius: 0;
          background-color: #2a2a2a;
          color: #f0f0f0;
          clip-path: inset(0px round 999px);
          .btn-text {
            transform: translate(0px, 0px);
          }
        }
        .btn-mask.btn-bottom {
          transition: 0.5s;
          align-items: flex-start;
          background-color: #ccc4b9;
          justify-content: flex-start;
          padding-left: 24px;
          display: flex;
          clip-path: inset(0px 54.2186px 0px 0px round 999px);
          .btn-text {
          }
        }
        :hover {
          .btn-mask.btn-top {
            clip-path: inset(6px 66px 6px 6px round 999px);
            transform: translate(4px, 0);
            .btn-text {
              visibility: hidden;
            }
          }
          .btn-mask.btn-bottom {
            clip-path: inset(0px round 999px);
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
