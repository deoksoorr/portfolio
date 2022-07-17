import React from 'react';
import styled, { css } from 'styled-components';
import { useClientsStore } from '../../store/clients';
import { ClientType } from '../../types/clientsType';
import Button from '../common/Button';

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

              <Button
                link={`/detail/${item.name}`}
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
    }
  }
`;
export default Clients;
