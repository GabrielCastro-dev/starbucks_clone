import './Home.scss';
import Header from '../layout/Header/Header';
import banners from '../assets/banners/banners';
import Slider from '../components/Slider/Slider';
import TextBox from '../components/TextBox/TextBox';
import ImgAndTxt from '../components/ImgAndTxt/ImgAndTxt';
import meal from '../assets/meal.png';

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

      <ImgAndTxt 
        imgPlace='right'
        img={meal}
        alt='Produtos da linha Cinnamon Toffee'
        title='Sua pausa mais saborosa!'
        text='Você pode fazer seu pedido sem pegar filas, 
        pedindo pelo aplicativo da Starbucks e retirando 
        na sua loja preferida.'
        btnTxt='Peça pelo app e retire na loja'
      />

    </>
  );
}

export default Home;

