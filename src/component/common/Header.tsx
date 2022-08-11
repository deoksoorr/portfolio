import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  const [modal, setModal] = useState(false);
  const [effect, setEffect] = useState('mount');
  const onClickBtn = () => {
    if (modal === false) {
      setEffect('mount');
      setModal(true);
    } else {
      setEffect('unmount');
      setTimeout(() => {
        setModal(false);
      }, 400);
    }
  };
  return (
    <>
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
              <Link to={'/about'} rel="noopener noreferrer">
                <span>ABOUT</span>
              </Link>
            </button>
          </li>
          <li>
            <button type="button">
              <Link to={'/artist'} rel="noopener noreferrer">
                <span>OUR ARTIST</span>
              </Link>
            </button>
          </li>
          <li>
            <button type="button" onClick={onClickBtn}>
              <span>CONTACT</span>
            </button>
          </li>
        </ul>
      </Nav>
      {modal == true ? (
        <Popup>
          <div className={`box-wrap ${effect}`}>
            <ul>
              <button onClick={onClickBtn}>CLOSE</button>
              <li>
                <h1>CONTACT</h1>
              </li>
              <li>
                <ul>
                  <li>
                    <ul>
                      <li>
                        <div>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            aria-invalid="true"
                          ></input>
                          <label htmlFor="name">NAME *</label>
                        </div>
                      </li>
                      <li>
                        <div>
                          <input
                            type="email"
                            name="name"
                            id="name"
                            aria-invalid="true"
                          ></input>
                          <label htmlFor="name">EMAIL *</label>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        aria-invalid="true"
                      ></input>
                      <label htmlFor="number">PHONE NUMBER *</label>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="message">MESSAGE *</label>
                      <textarea name="message"></textarea>
                    </div>
                  </li>
                  <li>
                    <button type="button">SUBMIT</button>
                  </li>
                </ul>
              </li>
            </ul>
            <Contact>
              <li>
                <div className="contact-title">
                  <h3>WE BELIEVE IN THE POWER OF DIGITAL.</h3>
                  <h3>AND WE LOVE COLLABORATING</h3>
                  <h3>WITH BRANDS THAT FEEL THE SAME.</h3>
                  <h3>LET’S CONNECT.</h3>
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

            <FooterNav>
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
                <li></li>
              </ul>
            </FooterNav>
          </div>
        </Popup>
      ) : null}
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
const moveUp = keyframes`
  from{
    top: 85px;
  }
  to{
    opacity: 1;
    top:0px;
  }
`;

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
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0;
  left: 0vw;
  > div {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    background: #fff;
    border-radius: 20px 20px 0px 0px;
    > ul {
      padding-top: 20px;
      width: 96vw;
      margin: 0 auto;
      position: relative;
      display: flex;
      > button {
        font-size: 0.65vw;
        position: absolute;
        right: 0;
      }
      > li {
        width: 50%;
        margin-top: 100px;
        > h1 {
          font-size: 4.8vw;
          line-height: 0.8;
          font-weight: 400;
        }
        > ul {
          > li {
            > ul {
              display: flex;
              > li {
                width: 48%;
                > div {
                  position: relative;
                  > input {
                    width: 100%;
                    padding-top: 20px;
                    padding-bottom: 12px;
                    border-style: solid;
                    border-width: 0 0 1px;
                    border-bottom: 1px solid #ddd;
                    z-index: 99;
                    :focus {
                      outline: 0;
                      border-color: #000;
                    }
                  }
                  > label {
                    position: absolute;
                    top: 0px;
                    color: #9d9d9d;
                    font-size: 0.5vw;
                  }
                }
              }
              > li:first-child {
                margin-right: 4%;
              }
            }
            > div {
              margin-top: 20px;
              position: relative;
              > label {
                position: absolute;
                top: 0px;
                color: #9d9d9d;
                font-size: 0.5vw;
              }
              > input {
                width: 100%;
                padding-top: 20px;
                padding-bottom: 12px;
                border-style: solid;
                border-width: 0 0 1px;
                border-color: #000 #000 #ddd;
                :focus {
                  outline: 0;
                  border-color: #000;
                }
              }
              > textarea {
                width: 100%;
                height: 100px;
                font-family: 'Saira';
                padding-top: 50px;
                border-style: solid;
                border-width: 0 0 1px;
                border-color: #000 #000 #ddd;
                :focus {
                  outline: 0;
                  border-color: #000;
                }
              }
            }

            > button {
              margin-top: 30px;
              background: #2a2a2a;
              color: white;
              border-radius: 999px;
              width: 100px;
              height: 1.5vw;
              font-size: 0.7vw;
              font-weight: 500;
              font-family: 'Saria';
            }
          }
        }
      }
    }
  }
  .mount {
    animation: 0.75s cubic-bezier(0.76, 0, 0.24, 1) ${moveUp2} forwards;
  }
  .unmount {
    animation: 0.7s cubic-bezier(0.76, 0, 0.24, 1) ${moveUp3} forwards;
  }
`;

const Nav = styled.header`
  z-index: 99;
  margin: 0 auto;
  font-size: 0.65vw;
  width: 100%;
  padding: 20px 2vw;
  background: #f0f0f0;
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
    /* opacity: 0;
    transform: translateY(0px);
    animation: ${moveUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    animation-delay: 2s; */
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
        font-size: 0.65vw;
        position: relative;
        span {
          position: relative;
          /* opacity: 0;
          transform: translateY(35px);
          animation: ${moveUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
          animation-delay: 2s; */
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

const FooterNav = styled.footer`
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
    width: 50%;
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

export default Header;
