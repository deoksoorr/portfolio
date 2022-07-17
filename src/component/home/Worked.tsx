import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWorkedStore from '../../store/worked';
import { WorkedType } from '../../types/workedType';
import 'swiper/css';

const Worked = () => {
  const { workedList } = useWorkedStore((state) => state);

  const imgNum = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box>
      <h1>BRANDS WE'VE WORKED WITH</h1>

      {}
      <div className="work_list">
        {workedList.map((item: WorkedType, i: number) => {
          return (
            <div className="work_list_detail" key={i}>
              <div className="work_title">
                <input type="radio" name="accordion" id={`works${i}`}></input>
                <label htmlFor={`works${i}`}>
                  <ul>
                    <li>{item.title}</li>
                    <li>{item.subtitle}</li>
                    <li className="btn"></li>
                  </ul>
                </label>
                <div className="work_detail">
                  <ul>
                    <li></li>
                    <li>
                      <p>{item.description}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1>WITH Artbuddy</h1>
      <CustomSwiper
        slidesPerView={'auto'}
        spaceBetween={40}
        loop={true}
        autoHeight={true}
      >
        {imgNum.map((o, i) => {
          return (
            <SwiperSlide style={{ width: 'auto' }}>
              <SwiperContent
                src={`/images/artbuddy/artbuddy_0${i + 1}.png`}
                alt={`${i}`}
              ></SwiperContent>
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
    </Box>
  );
};

const Box = styled.div`
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
  .work_list {
    margin-bottom: 4vw;
    .work_list_detail {
      border-bottom: 1px solid rgb(205, 205, 205);
      .work_title {
        input[id*='works'] {
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
          margin-bottom: 1.4vw;
          max-height: 0;
          transition: 0.35s;
          overflow: hidden;
          > ul {
            display: flex;
            justify-content: space-between;
            > li {
              width: 50%;
              > p {
                width: 80%;
                font-size: 0.7vw;
                line-height: 1.2;
                color: #757575;
              }
            }
          }
        }

        input[id*='works']:checked + label {
          > ul {
            > li:nth-child(3):before {
              content: 'CHOOSE OTHER :)';
            }
          }
        }
        input[id*='works']:checked + label + .work_detail {
          max-height: 50px;
        }
      }
    }
  }
`;

const CustomSwiper = styled(Swiper)`
  > .swiper-slide {
    width: auto;
  }
`;
const SwiperContent = styled.img`
  height: 25vw;
`;
export default Worked;
