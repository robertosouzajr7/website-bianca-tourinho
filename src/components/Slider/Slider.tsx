import React from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Container } from "./Style";
import { fotos } from "../../assets/fotos";
import "../../styles/slider.css";

const Slide: React.FC = () => {
  const swiperRef = React.useRef<SwiperRef>(null);
  return (
    <Container>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        {fotos.map((item) => (
          <SwiperSlide>
            <img src={item} alt="Slide de fotos" className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slide;
