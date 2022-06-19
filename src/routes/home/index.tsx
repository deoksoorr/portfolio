import About from '../../component/about/About';
import Clients from '../../component/home/Clients';
import Gallery from '../../component/home/Gallery';
import Title from '../../component/home/Title';

const Home = () => {
  return (
    <>
      <Title />
      <Gallery />
      <About />
      <Clients />
    </>
  );
};

export default Home;
