import React from 'react';
import styled from 'styled-components';
import { useClientsStore } from '../../store/service';
import { ClientType } from '../../types/clientsType';
import DownloadButton from '../common/DownloadButton';

const Clients = () => {
  const { clientsList } = useClientsStore((state) => state);
  return (
    <Box>
      <h1>OUR SERVICE</h1>
      <ul>
        {clientsList.map((item: ClientType, i: number) => {
          return (
            <li key={i}>
              <h1>{item.name}</h1>
              <div className="desBox">
                <p>{item.description}</p>
              </div>

              <DownloadButton
                link={`/images/home/${item.filename}.pdf`}
                btntop={item.btntop}
                btnbot={item.btnbot}
              />
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
    font-size: 2.78vw;
    line-height: 0.8;
    font-weight: 400;
  }
  > ul {
    display: flex;
    justify-content: space-between;
    > li {
      width: 50%;
      position: relative;
      > h1 {
        font-size: 2vw;
      }
      > .desBox {
        height: 4vw;
        width: 70%;
        > p {
          margin-top: 1vw;
          font-size: 0.8vw;
          line-height: 1.2vw;
          font-weight: 300;
          color: #2a2a2a;
        }
        margin-bottom: 2vw;
      }
      a {
        .btntop {
          width: 120px;
        }
        .btnbot {
          width: 120px;
        }
        :hover {
          .btntop {
            width: 4px;
            height: 1px;
          }
          .btnbot {
            width: 95px;
          }
        }
      }
    }
  }
`;
export default Clients;
