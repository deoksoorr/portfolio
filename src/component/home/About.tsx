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
            <p>A20는 아티스트가</p>
            <p>성장하는 모든 순간과 함께합니다.</p>
          </li>
          <li>
            <span>
              고객의 니즈(Needs)에 맞춰 최적화 된 솔루션을 제공하며, 치밀한
              분석을 통한 컨텐츠 기반의 결과물을 제공합니다.
              <br />
              'A20'는 시장의 변화와 트랜드를 끊임없이 분석하고 연구하며,
              <br />
              변화에 대응한 새로운 경험을 고객에게 전달하는 회사로 도약해 나아갈
              것입니다.
            </span>
            <Button link={'/about'} btntop="Get to know us" btnbot="ABOUT US" />
          </li>
        </ul>
      </Box>
      {/* <VideoBox ref={videoRef} style={{ width: `${width}vw` }}>
        <video autoPlay loop muted>
          <source
            src={`videos/20d42b34-60b4-4fdf-a1b3-0cf53a3ba4f1.mp4`}
            type="video/mp4"
          ></source>
        </video>
      </VideoBox> */}
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
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.1vw;
        line-height: 1.2;
      }
      > span {
        display: block;
        font-size: 0.8vw;
        line-height: 1.2vw;
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
