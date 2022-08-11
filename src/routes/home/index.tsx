import About from '../../component/home/About';
import Service from '../../component/home/Service';
import Gallery from '../../component/home/Gallery';
import Title from '../../component/home/Title';
import Team from '../../component/home/Team';
import styled from 'styled-components';
import Artbuddy from '../../component/home/Artbuddy';
import Artist from '../../component/home/Artist';

const Home = () => {
  return (
    <>
      <Box>
        <Title />
        <Gallery />
        <About />
        <Service />
        <Artist />
        <Team />
        {/* <Artbuddy /> */}
      </Box>
    </>
  );
};

const Box = styled.div`
  background: #f0f0f0;
`;

export default Home;
