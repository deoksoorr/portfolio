import About from '../../component/home/About';
import Clients from '../../component/home/Clients';
import Gallery from '../../component/home/Gallery';
import Title from '../../component/home/Title';
import Worked from '../../component/home/Worked';

const Home = () => {
  return (
    <>
      <Title />
      <Gallery />
      <About />
      <Clients />
      <Worked />
    </>
  );
};

export default Home;
