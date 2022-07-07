import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Worked = () => {
  return (
    <Box>
      <h1>BRANDS WE'VE WORKED WITH</h1>

      <div className="work_list">
        <div className="work_list_detail">
          <div className="work_title">
            <input type="radio" name="accordion" id="works1"></input>
            <label htmlFor="works1">
              <ul>
                <li>WOOLWORTHS</li>
                <li>RESEARCH - STRATEGY</li>
                <li className="btn"></li>
              </ul>
            </label>
            <div className="work_detail">
              <ul>
                <li></li>
                <li>
                  <p>
                    Working closely with Woolworths within a SPRINT framework,
                    we undertook extensive primary and secondary user research
                    as well as user experience testing with the client’s desired
                    target audience. The result was a tested and validated
                    savings and budgeting proposition.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="work_list_detail">
          <div className="work_title">
            <input type="radio" name="accordion" id="works2"></input>
            <label htmlFor="works2">
              <ul>
                <li>WOOLWORTHS</li>
                <li>RESEARCH - STRATEGY</li>
                <li className="btn"></li>
              </ul>
            </label>
            <div className="work_detail">
              <ul>
                <li></li>
                <li>
                  <p>
                    Working closely with Woolworths within a SPRINT framework,
                    we undertook extensive primary and secondary user research
                    as well as user experience testing with the client’s desired
                    target audience. The result was a tested and validated
                    savings and budgeting proposition.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="work_list_detail">
          <div className="work_title">
            <input type="radio" name="accordion" id="works3"></input>
            <label htmlFor="works3">
              <ul>
                <li>WOOLWORTHS</li>
                <li>RESEARCH - STRATEGY</li>
                <li className="btn"></li>
              </ul>
            </label>
            <div className="work_detail">
              <ul>
                <li></li>
                <li>
                  <p>
                    Working closely with Woolworths within a SPRINT framework,
                    we undertook extensive primary and secondary user research
                    as well as user experience testing with the client’s desired
                    target audience. The result was a tested and validated
                    savings and budgeting proposition.
                  </p>
                </li>
              </ul>
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
    .work_list_detail {
      border-bottom: 1px solid rgb(205, 205, 205);
      .work_title {
        input[id*='works'] {
          display: none;
        }
        > label {
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
            > li:nth-child(3):before {
              content: 'MORE +';
            }
          }
        }
        .work_detail {
          margin-bottom: 1.4vw;
          max-height: 0;
          transition: 0.35s;
          overflow: hidden;
          > ul {
            display: flex;
            justify-content: space-between;
            > li {
              width: 50%;
              > p {
                width: 80%;
                font-size: 0.7vw;
                line-height: 1.2;
                color: #757575;
              }
            }
          }
        }

        input[id*='works']:checked + label {
          > ul {
            > li:nth-child(3):before {
              content: 'CHOOSE OTHER :)';
            }
          }
        }
        input[id*='works']:checked + label + .work_detail {
          max-height: 50px;
        }
      }
    }
  }
`;
export default Worked;
