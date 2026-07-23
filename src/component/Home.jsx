import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import hero1 from "../assets/images/hero-1.webp";
import hero2 from "../assets/images/hero-2.webp";
import hero3 from "../assets/images/hero-3.webp";
import "./CSS/home.css";

function Home() {
  return (
    <section className="home">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiper"
      >
        <SwiperSlide>
          <img src={hero1} alt="Job Hustle Hero 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={hero2} alt="Job Hustle Hero 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={hero3} alt="Job Hustle Hero 3" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Home;
