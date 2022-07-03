import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Worked = () => {
  return (
    <Box>
      <h1>BRANDS WE'VE WORKED WITH</h1>
      <div className="work_list">
        <div className="work_title">
          <ul>
            <li>WOOLWORTHS</li>
            <li>RESEARCH - STRATEGY</li>
            <li className="btn">MORE+</li>
          </ul>
          <div className="work_detail">
            <ul>
              <li></li>
              <li>
                <p>
                  Working closely with Woolworths within a SPRINT framework, we
                  undertook extensive primary and secondary user research as
                  well as user experience testing with the client’s desired
                  target audience. The result was a tested and validated savings
                  and budgeting proposition.
                </p>
              </li>
            </ul>
          </div>
          <div className="acc-line-mask">
            <div
              className="acc-list-line"
              style={{
                transform: 'translate3d(0%, 0px, 0px)',
                backgroundColor: 'rgb(205, 205, 205)',
              }}
            >
              <div
                className="dark-list-line"
                style={{ transform: 'translate3d(100%, 0px, 0px)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
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
    font-size: 2.78vw;
    line-height: 0.8;
    font-weight: 400;
  }
  .work_list {
    .work_title {
      > ul {
        padding-top: 1.4vw;
        padding-bottom: 1.4vw;
        font-size: 0.8vw;
        display: flex;
        width: 100%;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        > li:nth-child(1),
        > li:nth-child(2) {
          width: 50%;
        }
        > li:nth-child(3) {
          position: absolute;
          right: 0;
        }
      }
      .work_detail {
        margin-bottom: 1.4vw;
        > ul {
          display: flex;
          justify-content: space-between;
          > li {
            width: 50%;
            > p {
              width: 80%;
              font-size: 0.7vw;
              line-height: 1.2;
              color: #2a2a2a;
            }
          }
        }
      }
      .acc-line-mask {
        overflow: hidden;
        width: 100%;
        height: 1px;
        .acc-list-line {
          overflow: hidden;
          width: 100%;
          height: 1px;
          .dark-list-line {
            width: 100%;
            height: 1px;
            background-color: #2a2a2a;
          }
        }
      }
      &:hover {
        .acc-line-mask {
          .acc-list-line {
            .dark-list-line {
              transform: translate3d(100%, 0px, 0px);
            }
          }
        }
      }
    }
  }
`;
export default Worked;
