import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Link to={'/'} rel="noopener noreferrer">
        <h1>A2O-LAB</h1>
      </Link>
      <ul>
        {/* <li>
          <button type="button">
            <span>CASE STUDIES</span>
          </button>
        </li> */}
        <li>
          <button type="button">
            <span>WORK</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>ABOUT</span>
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

const moveUp = keyframes`
  from{
    top: 85px;
  }
  to{
    opacity: 1;
    top:0px;
  }
`;

const Nav = styled.header`
  z-index: 999;
  margin: 0 auto;
  font-size: 13px;
  width: 100%;
  padding: 20px 2vw;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  h1 {
    font-weight: 300;
    position: relative;
    opacity: 0;
    transform: translateY(0px);
    animation: ${moveUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    animation-delay: 2s;
    font-weight: 300;
  }
  > ul {
    //width: 22.5vw;
    width: 15vw;
    display: flex;
    justify-content: inherit;
    > li {
      > button {
        font-family: 'Saira', sans-serif;
        font-size: 13px;
        position: relative;
        span {
          position: relative;
          opacity: 0;
          transform: translateY(35px);
          animation: ${moveUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
          animation-delay: 2s;
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
