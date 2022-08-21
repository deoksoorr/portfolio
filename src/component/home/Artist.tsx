import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { usenewmainArtistStore } from '../../store/mainartist';
import { ArtistType } from '../../types/artistType';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../common/Button';

interface slideStyle {
  id: string;
  length: string[];
}

const Artist = () => {
  const { artistList } = usenewmainArtistStore((state) => state);
  const [slide, setSlide] = useState(false);
  const [slideEffect, setslideEffect] = useState('mount');
  const goSlide = () => {
    if (slide === false) {
      setslideEffect('mount');
      setTimeout(() => {
        setSlide(true);
      }, 400);
    } else {
      setslideEffect('unmount');
      setTimeout(() => {
        setSlide(false);
      }, 400);
    }
  };

  return (
    <Box>
      <h1>OUR ARTIST</h1>
      <div className="otherlink">
        <Button link={'/artist'} btntop="VIEW MORE +" btnbot="OTHER ARTIST" />
      </div>
      <div className="work_list">
        {artistList.map((team: ArtistType, i: number) => {
          return (
            <div className="work_list_detail" key={i}>
              <div className="work_title">
                <input type="radio" name="accordion" id={`artist${i}`}></input>
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
    </Box>
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

const Box = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;
  h1 {
    margin-bottom: 4vw;
    font-size: 2.78vw;
    line-height: 0.8;
    font-weight: 400;
  }
  > .otherlink {
    position: absolute;
    top: 1vw;
    left: 17vw;
    a {
      .btntop {
        width: 100px;
      }
      .btnbot {
        width: 100px;
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
  .work_list {
    position: relative;
    margin-bottom: 4vw;
    width: 100%;
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
`;
export default Artist;
