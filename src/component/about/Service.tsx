import React from 'react';
import styled from 'styled-components';

const Service = () => {
  return (
    <Box>
      <ul>
        <li className="left">
          <ul>
            <li>
              <h1>MARKETING</h1>
              <ul>
                <li>001</li>
                <li>
                  <span></span>
                </li>
                <li>003</li>
              </ul>
              {/* <p>
                고객의 니즈(Needs)에 맞춰 최적화 된 솔루션을 제공하며, 치밀한
                분석을 통한 컨텐츠 기반의 결과물을 제공합니다. 'A20'는 시장의
                변화와 트랜드를 끊임없이 분석하고 연구하며, 변화에 대응한 새로운
                경험을 고객에게 전달하는 회사로 도약해 나아갈 것입니다.
              </p> */}
            </li>
            <li>
              <h1>BLOCK CHAIN</h1>
              <ul>
                <li>002</li>
                <li>
                  <span></span>
                </li>
                <li>003</li>
              </ul>
              {/* <p>
                고객의 니즈(Needs)에 맞춰 최적화 된 솔루션을 제공하며, 치밀한
                분석을 통한 컨텐츠 기반의 결과물을 제공합니다. 'A20'는 시장의
                변화와 트랜드를 끊임없이 분석하고 연구하며, 변화에 대응한 새로운
                경험을 고객에게 전달하는 회사로 도약해 나아갈 것입니다.
              </p> */}
            </li>
            <li>
              <h1>DESIGN</h1>
              <ul>
                <li>003</li>
                <li>
                  <span></span>
                </li>
                <li>003</li>
              </ul>
              {/* <p>
                고객의 니즈(Needs)에 맞춰 최적화 된 솔루션을 제공하며, 치밀한
                분석을 통한 컨텐츠 기반의 결과물을 제공합니다. 'A20'는 시장의
                변화와 트랜드를 끊임없이 분석하고 연구하며, 변화에 대응한 새로운
                경험을 고객에게 전달하는 회사로 도약해 나아갈 것입니다.
              </p> */}
            </li>
          </ul>
        </li>
        <li className="right">
          <ul>
            <li>
              <p>CUSTOMER RESEARCH</p>
              <p>TRENDS ANALYSIS</p>
              <p>COMPETITIVE REVIEW</p>
              <p>USABILITY TESTING</p>
              <p>FOCUS GROUPS</p>
            </li>
            <li>
              <p>WEBFLOW DEVELOPMENT</p>
              <p>TOKEN ISSUANCE</p>
              <p>LISTING ON THE EXCHANGE</p>
              <p>ISSUANCE OF NFT</p>
              <p>BUILDING A COMMUNITY</p>
            </li>
            <li>
              <p>ART DIRECTION</p>
              <p>BRAND IDENTITY DESIGN</p>
              <p>GRAPHIC DESIGN</p>
              <p>INTERACTION DESIGN</p>
              <p>DIGITAL PRODUCT DESIGN </p>
            </li>
          </ul>
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
  > ul {
    display: flex;
    > .left {
      width: 50%;
      > ul {
        width: 80%;
        > li {
          height: 550px;
          > h1 {
            margin-bottom: 2vw;
            font-size: 4.8vw;
            line-height: 0.8;
            font-weight: 400;
          }
          > ul {
            margin-bottom: 2vw;
            display: flex;
            align-items: center;
            position: relative;
            > li:nth-child(1),
            > li:nth-child(3) {
              width: 15%;
            }
            > li:nth-child(3) {
              text-align: right;
            }
            > li:nth-child(2) {
              width: 70%;
              position: relative;
              > span {
                display: block;
                height: 1px;
                width: 50%;
                background: #202020;
                position: absolute;
                right: -20px;
              }
            }
          }
          > p {
            width: 80%;
            font-size: 0.8vw;
            line-height: 1.2vw;
            font-weight: 300;
            color: #2a2a2a;
          }
        }
      }
      > p {
      }
    }
    > .right {
      width: 50%;
      border-left: 1px solid #202020;
      padding-left: 40px;
      box-sizing: border-box;
      > ul {
        > li {
          height: 550px;
          > p {
            font-size: 3vw;
            line-height: 4vw;
          }
        }
      }
    }
  }
`;
export default Service;
