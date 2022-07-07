import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Contact>
        <li>
          <h3>WE WOULD LOVE TO HEAR FROM YOU.</h3>
          <h3>LET’S WORK — TOGETHER</h3>
          <button>CONTACT US</button>
        </li>
        <li>
          <ul>
            <li>
              <h4>BUSINESS INQUIRES</h4>
              <p>DAVE@A2O-LAB.IO</p>
              <p>+32 10 3332 8616</p>
            </li>
            <li>
              <h4>LOCATION</h4>
              <p>2, Jeongja-ro, Bundang-g</p>
              <p>Seongnam-si, Gyeonggi-do</p>
              <p>Republic of Korea</p>
            </li>
          </ul>
        </li>
      </Contact>
      <Nav>
        <h1>DSR-STDUIO®</h1>
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
    </>
  );
};
const Contact = styled.ul`
  margin: 0 auto;
  width: 96vw;
  padding: 25px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > li {
    width: 50%;
    > ul {
      display: flex;
      justify-content: space-between;
      > li {
        width: 50%;
      }
    }
  }
`;
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
