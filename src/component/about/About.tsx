import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Box>
      <ul>
        <li>
          <p>고객과 함께 문제 해결을 위한 방법론을 찾고, </p>
          <p>다양한 전문가 그룹과의 매칭을 통해,</p>
          <p>고객의 문제 해결에 초점을 맞추고 있습니다.</p>
        </li>
        <li>
          <img src={`/images/about/about_detail.png`} alt="about"></img>
        </li>
      </ul>
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
      > img {
        width: 80%;
      }
    }
  }
`;
export default About;
