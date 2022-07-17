import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Contact>
        <li>
          <div className="contact-title">
            <h3>WE WOULD LOVE TO HEAR FROM YOU.</h3>
            <h3>LET’S WORK — TOGETHER</h3>
          </div>
          <div className="btn-outer">
            <div className="btn-mask btn-top">
              <div className="btn-text">CONTACT US</div>
            </div>
            <div className="btn-mask btn-bottom">
              <div className="btn-text">GET IN TOUCH</div>
            </div>
          </div>
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
  padding: 130px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > li {
    width: 50%;
    > .contact-title {
      margin-bottom: 1vw;
      > h3 {
        font-size: 1.4vw;
      }
    }
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
        width: 85px;
        padding: 5px 0;
        padding-left: 10px;
      }
      .btn-mask.btn-bottom {
        transition: 0.5s;
        align-items: flex-start;
        background-color: #ccc4b9;
        justify-content: flex-start;
        padding: 5px 10px;
        padding-left: 5px;
        display: flex;
        border-radius: 999px;
        overflow: hidden;
        .btn-text {
          display: none;
        }
      }
      :hover {
        transition: 0.5s;
        .btn-mask.btn-top {
          width: 13px;
          padding: 1px 0;
          overflow: hidden;
          transform: translate(8px, 40%);
          .btn-text {
            visibility: hidden;
            transform: translateY(-50%);
          }
        }
        .btn-mask.btn-bottom {
          height: 10px;
          padding: 5px 30px;
          padding-left: 25px;
          .btn-text {
            display: block;
          }
        }
      }
    }
    > ul {
      display: flex;
      justify-content: space-between;
      > li {
        width: 50%;
        > h4 {
          margin-bottom: 0.8vw;
          color: #757575;
          font-size: 0.9vw;
        }
        > p {
          font-size: 0.9vw;
          line-height: 1.2vw;
        }
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
