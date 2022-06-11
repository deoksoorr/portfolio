import styled from 'styled-components';

const Footer = () => {
  return (
    <Nav>
      <h1>DSR-STDUIO</h1>
      <ul>
        <li>
          <button type="button">
            <span>INSTAGRAM</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>LINKEDIN</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>BACK TO TOP</span>
          </button>
        </li>
      </ul>
    </Nav>
  );
};
const Nav = styled.footer`
  border-top: 1px solid #999;
  margin: 0 auto;
  font-size: 11px;
  width: 96vw;
  padding: 25px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 300;
  }
  > ul {
    width: 22.5vw;
    display: flex;
    justify-content: inherit;
    > li {
      > button {
        font-family: 'Saira', sans-serif;
        font-size: 11px;
        position: relative;
        span {
          font-weight: 300;
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: 1.5px;
            left: 0;
            background-color: #000;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s;
          }
          &:hover {
            &::after {
              transform-origin: bottom left;
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }
`;

export default Footer;
