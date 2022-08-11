import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { usenewArtistStore } from '../../store/newartist';
import { useoldArtistStore } from '../../store/oldartist';
import { ArtistType } from '../../types/artistType';
import { Swiper, SwiperSlide } from 'swiper/react';

interface slideStyle {
  id: string;
  length: string[];
}

const List = () => {
  // const [slide, setSlide] = useState(false);
  // const [slideEffect, setslideEffect] = useState('mount');
  // const goSlide = () => {
  //   if (slide === false) {
  //     setslideEffect('mount');
  //     setTimeout(() => {
  //       setSlide(true);
  //     }, 400);
  //   } else {
  //     setslideEffect('unmount');
  //     setTimeout(() => {
  //       setSlide(false);
  //     }, 400);
  //   }
  // };

  const { artistList } = usenewArtistStore((state) => state);
  const { oldartistList } = useoldArtistStore((state) => state);

  if (artistList.length > 10) {
    for (let i = 10; i <= artistList.length; i++) {
      artistList.splice(i, i + 1);
      //console.log(artistList);
    }
  }

  return (
    <Box>
      <ul>
        <li className="head">
          <div className="lineMask">
            <div>
              <span className="transition01">OUR</span>
            </div>
            &nbsp;
            <div>
              <span className="transition02">ARTIST</span>
            </div>
          </div>
        </li>
        <li>
          <span>TYPE</span>
        </li>
        <li>
          <div>
            <ul>
              <li>
                <label htmlFor="pro">PRO</label>
              </li>
              <li>
                <label htmlFor="rookie">ROOKIE</label>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <input type="radio" name="artists" id="pro" defaultChecked></input>
      <input type="radio" name="artists" id="rookie"></input>
      <div className="artlist proBox">
        <div className="work_list">
          {oldartistList.map((team: ArtistType, i: number) => {
            return (
              <>
                <div className="work_list_detail" key={i}>
                  <div className="work_title">
                    <input
                      type="radio"
                      name="accordion"
                      id={`artist${i}`}
                    ></input>
                    <label htmlFor={`artist${i}`}>
                      <ul>
                        <li>{team.name}</li>
                        <li>{team.position}</li>
                        <li className="btn"></li>
                      </ul>
                    </label>
                    <div className="work_detail">
                      <ul>
                        <li>
                          <CustomSwiper
                            slidesPerView={'auto'}
                            spaceBetween={40}
                            loop={true}
                            autoHeight={true}
                          >
                            {team.photo.map((o, i) => {
                              if (i == team.photo.length) {
                                return false;
                              }
                              var num = team.photo.length;
                              return (
                                <SwiperSlide style={{ width: 'auto' }} key={i}>
                                  <button
                                    type="button"
                                    // onClick={goSlide}
                                    // id={team.id}
                                  >
                                    <SwiperContent
                                      src={`/images/artbuddy/artist/new/${
                                        team.id
                                      }/0${i + 1}.png`}
                                      alt={team.id}
                                    ></SwiperContent>
                                  </button>
                                </SwiperSlide>
                              );
                            })}
                          </CustomSwiper>
                          <p>{team.description}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* {slide == true ? (
          <Popup>
            <div className={`box-wrap ${slideEffect}`}>
              <div>
                <button onClick={goSlide}>CLOSE</button>
              </div>
              <div></div>
            </div>
          </Popup>
        ) : null} */}
      </div>
      <div className="artlist rookieBox">
        <div className="work_list">
          {artistList.map((team: ArtistType, i: number) => {
            return (
              <>
                <div className="work_list_detail" key={i}>
                  <div className="work_title">
                    <input
                      type="radio"
                      name="accordio2"
                      id={`oldartist${i}`}
                    ></input>
                    <label htmlFor={`oldartist${i}`}>
                      <ul>
                        <li>{team.name}</li>
                        <li>{team.position}</li>
                        <li className="btn"></li>
                      </ul>
                    </label>
                    <div className="work_detail">
                      <ul>
                        <li>
                          <CustomSwiper
                            slidesPerView={'auto'}
                            spaceBetween={40}
                            loop={true}
                            autoHeight={true}
                          >
                            {team.photo.map((o, i) => {
                              if (i == team.photo.length) {
                                return false;
                              }
                              var num = team.photo.length;
                              return (
                                <SwiperSlide style={{ width: 'auto' }} key={i}>
                                  <button
                                    type="button"
                                    // onClick={goSlide}
                                    // id={team.id}
                                  >
                                    <SwiperContent
                                      src={`/images/artbuddy/artist/new/${
                                        team.id
                                      }/0${i + 1}.png`}
                                      alt={team.id}
                                    ></SwiperContent>
                                  </button>
                                </SwiperSlide>
                              );
                            })}
                          </CustomSwiper>
                          <p>{team.description}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Box>
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

const Box = styled.div`
  margin: 0 auto;
  padding-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;
  .artlist {
    display: none;
    width: 100%;
    padding-bottom: 50px;
  }
  > input {
    display: none;
  }
  > input[id='pro']:checked ~ .proBox {
    display: block;
  }
  > input[id='rookie']:checked ~ .rookieBox {
    display: block;
  }
  > .proBox,
  > .rookieBox {
    .work_list {
      margin-bottom: 4vw;
      .work_list_detail {
        border-bottom: 1px solid rgb(205, 205, 205);
        .work_title {
          input[id*='artist'] {
            display: none;
          }
          > label {
            > ul {
              padding-top: 1.4vw;
              padding-bottom: 1.4vw;
              font-size: 0.8vw;
              display: flex;
              width: 100%;
              justify-content: space-between;
              position: relative;
              cursor: pointer;
              > li:nth-child(1),
              > li:nth-child(2) {
                width: 50%;
              }
              > li:nth-child(3) {
                position: absolute;
                right: 0;
              }
              > li:nth-child(3):before {
                content: 'MORE +';
              }
            }
          }
          .work_detail {
            max-height: 0;
            transition: 0.35s;
            overflow: hidden;
            > ul {
              display: flex;
              justify-content: space-between;
              > li {
                width: 100%;
                > p {
                  width: 80%;
                  font-size: 0.7vw;
                  line-height: 1.2;
                  color: #757575;
                }
              }
            }
          }

          input[id*='artist']:checked + label {
            > ul {
              > li:nth-child(3):before {
                content: 'CHOOSE OTHER :)';
              }
            }
          }
          input[id*='artist']:checked + label + .work_detail {
            max-height: 25vw;
            margin-bottom: 1.4vw;
          }
        }
      }
    }
  }
  > ul {
    display: flex;
    align-items: baseline;
    position: relative;
    padding-bottom: 20px;
    border-bottom: 1px solid #202020;
    > li {
    }
    > li:last-child {
      position: absolute;
      right: 0;
      bottom: 20px;
      > div {
        > ul {
          display: flex;
          border: 1px solid #bdbdbd;
          border-radius: 100px;
          padding: 8px 30px;
          font-size: 0.8vw;
          > li:first-child {
            > label {
              margin-right: 30px;
            }
          }
          > li {
            > label {
              cursor: pointer;
            }
          }
        }
      }
    }
    > .head {
      width: 50%;
      font-size: 6vw;
      line-height: 0.8;
      font-weight: 400;
      > .lineMask {
        overflow: hidden;
        line-height: 5.2vw;
        > div {
          display: inline-block;
          position: relative;
          overflow: hidden;
          span {
            position: relative;
            opacity: 0;
            transform: translateY(85px);
            animation: ${moveUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1)
              forwards;
            font-weight: 100;
          }
          .transition02 {
            animation-delay: 0.2s;
            color: #ff4f42;
          }
        }
      }
    }
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0vw;
  > div {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    background: #000000;
    border-radius: 20px 20px 0px 0px;
    > div {
      width: 96vw;
      margin: 0 auto;
      position: relative;
      padding-top: 26px;
      > button {
        position: absolute;
        right: 0;
        color: #ffffff;
        font-size: 13px;
      }
    }
  }
  button {
    z-index: 9999;
  }
  .mount {
    animation: 0.75s cubic-bezier(0.76, 0, 0.24, 1) ${moveUp2} forwards;
  }
  .unmount {
    animation: 0.7s cubic-bezier(0.76, 0, 0.24, 1) ${moveUp3} forwards;
  }
`;

const CustomSwiper = styled(Swiper)`
  > .swiper-slide {
    width: auto;
  }
`;
const SwiperContent = styled.img`
  height: 25vw;
  cursor: pointer;
`;

export default List;
