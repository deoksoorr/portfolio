import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Artbuddy = () => {
  const imgNum = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box>
      <h1>WITH Artbuddy</h1>
      <CustomSwiper
        slidesPerView={'auto'}
        spaceBetween={40}
        loop={true}
        autoHeight={true}
      >
        {imgNum.map((o, i) => {
          return (
            <SwiperSlide style={{ width: 'auto' }} key={i}>
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
  width: 96vw;
  margin: 0 auto;
  h1 {
    margin-bottom: 4vw;
    font-size: 2.78vw;
    line-height: 0.8;
    font-weight: 400;
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
export default Artbuddy;
