import './Home.scss';
import Header from '../layout/Header/Header';
import banners from '../assets/banners/banners';
import Slider from '../components/Slider/Slider';
import TextBox from '../components/TextBox/TextBox';
import ImgAndTxt from '../components/ImgAndTxt/ImgAndTxt';
import homeContent from '../data/homeContent';
import Footer from '../layout/Footer/Footer';

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

      {homeContent.map((item) => 
        <ImgAndTxt 
          imgPlace={item.imgPlace}
          img={item.img}
          alt={item.alt}
          title={item.title}
          text={item.text}
          btnTxt={item.btnTxt}
        />
      )}

      <Footer />

    </>
  );
}

export default Home;

