import React from 'react';
import styled, { css } from 'styled-components';
import { useClientsStore } from '../../store/clients';
import { ClientType } from '../../types/clientsType';

const Clients = () => {
  const { clientsList } = useClientsStore((state) => state);
  return (
    <Box>
      <h1>FEATURED CLIENTS</h1>
      <ul>
        {clientsList.map((item: ClientType, i: number) => {
          return (
            <li key={i}>
              <div className="imgBox">
                <img src={`/images/clients/${item.name}.svg`} alt="" />
              </div>
              <div className="desBox">
                <p>{item.description}</p>
              </div>

              <a href="" rel="noopener noreferrer">
                <div className="btn-outer">
                  <div className="btn-mask btn-top">
                    <div className="btn-text">{item.btntop}</div>
                  </div>
                  <div className="btn-mask btn-bottom">
                    <div className="btn-text">{item.btnbot}</div>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
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
    display: flex;
    justify-content: space-between;
    > li {
      width: 22.5vw;
      position: relative;
      > .imgBox {
        width: 64%;

        margin-bottom: 1vw;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      > .desBox {
        margin-bottom: 2vw;
        height: 9vw;
        > p {
          font-size: 0.8vw;
          line-height: 1.4;
          font-weight: 300;
          color: #2a2a2a;
        }
      }
      > a {
        > .btn-outer {
          cursor: pointer;
          position: relative;
          .btn-mask {
            transition: 0.35s;
            position: absolute;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            .btn-text {
              font-size: 12px;
            }
            height: 10px;
          }
          .btn-mask.btn-top {
            z-index: 999;
            background-color: #2a2a2a;
            color: #f0f0f0;
            border-radius: 999px;
            overflow: hidden;
            width: auto;
          }
          .btn-mask.btn-bottom {
            transition: 0.5s;
            align-items: flex-start;
            background-color: #ccc4b9;
            justify-content: flex-start;
            padding-left: 24px;
            display: flex;
            border-radius: 999px;
          }
          :hover {
            transition: 0.5s;
            .btn-mask.btn-top {
              width: 10px;
              height: 10px;
              overflow: hidden;
              transform: (5px 0);
              transform: translateX(6px);
              .btn-text {
                visibility: hidden;
                transform: translateY(-50%);
              }
            }
            .btn-mask.btn-bottom {
              padding: 0;
              height: 10px;
              .btn-text {
              }
            }
          }
        }
      }
    }
  }
`;
export default Clients;
