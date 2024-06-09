import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";


import "./carousel.css";

import {FreeMode, Autoplay} from "swiper/modules";
import ProductCard from "../ProductCard";

export default function Carousel({airConditioners}) {
  return airConditioners.length > 0 ? (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      freeMode={true}
      modules={[FreeMode, Autoplay]}
      className="productCarousel py-3">
      {airConditioners.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    ""
  );
}
