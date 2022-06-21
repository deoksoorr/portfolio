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
`;
export default Worked;
