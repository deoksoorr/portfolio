import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <h1>DSR-STDUIO</h1>
      <ul>
        <li>
          <button type="button">
            <span>ABOUT</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>DESIGN</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>DEVELOPMENT</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>CONTACT</span>
          </button>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.header`
  margin: 0 auto;
  font-size: 13px;
  width: 96vw;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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
        font-size: 13px;
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

export default Header;
