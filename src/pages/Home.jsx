import './Home.scss';
import Header from '../layout/Header/Header';
import banners from '../assets/banners/banners';
import Slider from '../components/Slider/Slider';
import TextBox from '../components/TextBox/TextBox';

function Home() {
  return (
    <>
      <Header />

      <Slider banners={banners} />

      <TextBox 
        text='Nossa missão é inspirar e nutrir o espírito humano – 
        uma pessoa, uma xícara de café e uma comunidade de cada vez.'
        buttonTxt='Saiba mais'
      />

    </>
  );
}

export default Home;

