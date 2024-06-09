import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {Autoplay, EffectFade, Navigation} from "swiper/modules";

export default function Slider({slides}) {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        {slides.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
