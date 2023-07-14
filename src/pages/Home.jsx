import './Home.scss';
import Header from '../layout/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import banners from '../assets/banners/banners';

function Home() {
  return (
    <>
      <Header />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{delay:5000, disableOnInteraction: false,}} 
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {banners.map((banner) => 
          <SwiperSlide>
            <img src={banner} alt="Starbucks banner" />
          </SwiperSlide>
        )}
      </Swiper>

    </>
  );
}

export default Home;

