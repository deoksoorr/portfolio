import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Footer = () => {
  const rootLocation = window.location.href;

  const [modal2, setModal2] = useState(false);
  const [effect, setEffect] = useState('mount');
  const onClickBtn2 = () => {
    if (modal2 === false) {
      setEffect('mount');
      setTimeout(() => {
        setModal2(true);
      }, 400);
    } else {
      setEffect('unmount');
      setTimeout(() => {
        setModal2(false);
      }, 400);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Contact>
        <li>
          <div className="contact-title">
            <h3>WE WOULD LOVE TO HEAR FROM YOU.</h3>
            <h3>LET’S WORK — TOGETHER</h3>
          </div>
        </li>

        <li>
          <ul>
            <li>
              <h4>BUSINESS INQUIRES</h4>
              <p>DAVE@A2O-LAB.IO</p>
              <p>Tel 02 544 0225</p>
              <p>Fax 02 544 0226</p>
            </li>
            <li>
              <h4>LOCATION</h4>
              <p>81, Sapyeong-daero 55-gil</p>
              <p>Seocho-gu, Seoul</p>
              <p>Republic of Korea</p>
            </li>
          </ul>
        </li>
      </Contact>
      <Nav>
        <h1>A2O-LAB</h1>
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
            <button type="button" onClick={handleTop}>
              <span>BACK TO TOP</span>
            </button>
          </li>
        </ul>
        {/* {modal2 == true ? (
          <Popup>
            <div className={`box-wrap ${effect}`}>
              <ul>
                <button onClick={onClickBtn2}>CLOSE</button>
                <li>
                  <h1>CONTACT</h1>
                </li>
                <li>
                  <ul>
                    <ul>
                      <li></li>
                      <li></li>
                    </ul>
                    <li></li>
                    <li></li>
                    <li>
                      <button>SUBMIT</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Popup>
        ) : null} */}
      </Nav>
    </>
  );
};

const moveUp2 = keyframes`
  from{
    opacity: 0;
    top: 100vh;
  }
  to{
    opacity: 1;
    top:10vh;
  }
`;
const moveUp3 = keyframes`
  from{
    opacity: 1;
    top: 10vh;
  }
  to{
    opacity: 0;
    top:100vh;
  }
`;

const Popup = styled.div`
  transition: all 0.5s;
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  > div {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 10vh;
    background: #f0f0f0;
    border-radius: 20px 20px 0px 0px;
  }
  .mount {
    animation: 0.6s ease-in-out ${moveUp2} forwards;
  }
  .unmount {
    animation: 0.5s ease-in-out ${moveUp3} forwards;
  }
`;

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
    a {
      > .btn-outer {
        .btn-mask.btn-top {
          width: 85px;
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
  position: relative;
  border-top: 1px solid #999;
  margin: 0 auto;
  font-size: 0.65vw;
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
        font-size: 0.65vw;
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
