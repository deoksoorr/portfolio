import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
//import { usenewArtistStore } from '../../store/newartist';
import { usenewArtistStore1 } from '../../store/newartist01';
import { usenewArtistStore2 } from '../../store/newartist02';
import { usenewArtistStore3 } from '../../store/newartist03';
import { useoldArtistStore } from '../../store/oldartist';
import { ArtistType } from '../../types/artistType';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Paging from '../common/Paging';

interface slideStyle {
  id: string;
  length: string[];
}

const List = () => {
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

  const [viewPro, setviewPro] = useState(true);
  const [viewRookie, setviewRookie] = useState(false);

  const goPro = () => {
    if (viewPro === true) {
      return false;
    } else {
      setviewPro(true);
      setviewRookie(false);
    }
  };
  const goRookie = () => {
    if (viewRookie === true) {
      return false;
    } else {
      setviewRookie(true);
      setviewPro(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { oldartistList } = useoldArtistStore((state) => state);
  const { artistListone } = usenewArtistStore1((state) => state);
  const { artistListtwo } = usenewArtistStore2((state) => state);
  const { artistListthree } = usenewArtistStore3((state) => state);

  //const { artistList } = usenewArtistStore((state) => state);
  // 나중에 페이징작업 수정
  // const [rookiePost, setRookiePost] = useState<object>([]);
  // const [currentPosts, setCurrentPosts] = useState<object>([]); // 보여줄 포스트
  // const [page, setPage] = useState(1); // 현재 페이지
  // const handlePageChange = (page: any) => {
  //   setPage(page);
  // };
  // const [postPerPage] = useState(20); //페이지당 포스트 개수
  // const indexOfLastPost = page * postPerPage;
  // const indexOfFirstpost = indexOfLastPost - postPerPage;

  // useEffect(() => {
  //   setCurrentPosts(artistList.slice(indexOfFirstpost, indexOfLastPost));
  // }, [indexOfFirstpost, indexOfLastPost, page]);

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
                <input
                  type="radio"
                  name="artists"
                  id="pro"
                  defaultChecked
                ></input>
                <label htmlFor="pro" onClick={goPro}>
                  PRO
                </label>
              </li>
              <li>
                <input type="radio" name="artists" id="rookie"></input>
                <label htmlFor="rookie" onClick={goRookie}>
                  ROOKIE
                </label>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {viewPro == true ? (
        <div className="artlist proBox">
          <div className="work_list">
            {oldartistList.map((team: ArtistType, i: number) => {
              return (
                <div className="work_list_detail" key={i}>
                  <div className="work_title">
                    <input
                      type="radio"
                      name="accordion"
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
                                      src={`/images/artbuddy/artist/old/${
                                        team.id
                                      }/0${i + 1}.png`}
                                      alt={team.id}
                                    ></SwiperContent>
                                  </button>
                                </SwiperSlide>
                              );
                            })}
                          </CustomSwiper>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="labelbox">
              <label htmlFor="01page" onClick={handleTop}>
                01
              </label>
            </div>
          </div>
        </div>
      ) : null}

      {viewRookie == true ? (
        <div className="artlist rookieBox">
          <div className="work_list">
            <input
              type="radio"
              name="rookieList"
              id="01page"
              defaultChecked
            ></input>
            <input type="radio" name="rookieList" id="02page"></input>
            <input type="radio" name="rookieList" id="03page"></input>
            <div className="conbox page01" id="01page">
              {artistListone.map((team: ArtistType, i: number) => {
                return (
                  <div className="work_list_detail" key={i}>
                    <div className="work_title">
                      <input
                        type="radio"
                        name="accordion2"
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
                          {
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
                                    <SwiperSlide
                                      style={{ width: 'auto' }}
                                      key={i}
                                    >
                                      <button
                                        type="button"
                                        onClick={goSlide}
                                        id={team.id}
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
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="conbox page02" id="02page">
              {artistListtwo.map((team: ArtistType, i: number) => {
                return (
                  <div className="work_list_detail" key={i}>
                    <div className="work_title">
                      <input
                        type="radio"
                        name="accordion3"
                        id={`artist2${i}`}
                      ></input>
                      <label htmlFor={`artist2${i}`}>
                        <ul>
                          <li>{team.name}</li>
                          <li>{team.position}</li>
                          <li className="btn"></li>
                        </ul>
                      </label>
                      <div className="work_detail">
                        <ul>
                          {
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
                                    <SwiperSlide
                                      style={{ width: 'auto' }}
                                      key={i}
                                    >
                                      <button
                                        type="button"
                                        onClick={goSlide}
                                        id={team.id}
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
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="conbox page03" id="03page">
              {artistListthree.map((team: ArtistType, i: number) => {
                return (
                  <div className="work_list_detail" key={i}>
                    <div className="work_title">
                      <input
                        type="radio"
                        name="accordion4"
                        id={`artist3${i}`}
                      ></input>
                      <label htmlFor={`artist3${i}`}>
                        <ul>
                          <li>{team.name}</li>
                          <li>{team.position}</li>
                          <li className="btn"></li>
                        </ul>
                      </label>
                      <div className="work_detail">
                        <ul>
                          {
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
                                    <SwiperSlide
                                      style={{ width: 'auto' }}
                                      key={i}
                                    >
                                      <button
                                        type="button"
                                        onClick={goSlide}
                                        id={team.id}
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
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="labelbox">
              <label htmlFor="01page" onClick={handleTop}>
                01
              </label>
              <label htmlFor="02page" onClick={handleTop}>
                02
              </label>
              <label htmlFor="03page" onClick={handleTop}>
                03
              </label>
            </div>
          </div>
        </div>
      ) : null}
      {/*
      ---rookie---
      나중에 paging 수정
      {viewRookie == true ? (
        <div className="artlist rookieBox">
          <div className="work_list">
            {artistList.map((team: ArtistType, i: number) => {
              return (
                <div className="work_list_detail" key={i}>
                  <div className="work_title">
                    <input
                      type="radio"
                      name="accordio2"
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
                        {<li>
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
                                  <SwiperSlide
                                    style={{ width: 'auto' }}
                                    key={i}
                                  >
                                    <button
                                      type="button"
                                       onClick={goSlide}
                                       id={team.id}
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
                          </li> }
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Paging
            totalCount={artistList.length}
            page={page}
            postPerPage={postPerPage}
            pageRangeDisplayed={5}
            handlePageChange={handlePageChange}
          /> 
        </div>
      ) : null}
      */}
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
    width: 100%;
    padding-bottom: 50px;
  }
  > .proBox,
  > .rookieBox {
    .work_list {
      > input[type='radio'] {
        display: none;
      }
      > .conbox {
        display: none;
      }
      > input[id='01page']:checked ~ .page01 {
        display: block;
      }
      > input[id='02page']:checked ~ .page02 {
        display: block;
      }
      > input[id='03page']:checked ~ .page03 {
        display: block;
      }
      > .labelbox {
        text-align: center;
        margin-top: 65px;
        > label {
          cursor: pointer;
        }
        > label:first-child,
        > label:nth-child(2) {
          margin-right: 15px;
        }
      }
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
          align-items: center;
          border: 1px solid #bdbdbd;
          border-radius: 100px;
          padding: 3px 5px;
          > li:first-child {
            > label {
              margin-right: 5px;
            }
          }
          > li {
            position: relative;
            > input {
              display: none;
            }
            > input:checked + label {
              background-color: #202020;
              color: white;
            }
            > label {
              cursor: pointer;
              width: 4vw;
              height: 1.4vw;
              line-height: 1.4vw;
              border-radius: 999px;
              display: block;
              text-align: center;
              font-size: 0.8vw;
              transition: all 0.5s;
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
