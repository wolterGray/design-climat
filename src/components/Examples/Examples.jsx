import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./examples.css";

// import required modules
import {Autoplay, Pagination} from "swiper/modules";
import Title from "../Title";

function Examples() {
  const [slides] = React.useState([
    {img: "img/examples/1.jpg"},
    {img: "img/examples/2.jpg"},
    {img: "img/examples/3.jpg"},
    {img: "img/examples/4.jpg"},
    {img: "img/examples/5.jpg"},
    {img: "img/examples/6.jpg"},
    {img: "img/examples/7.jpg"},
  ]);

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="mb-10">
        <Title>Наші роботи</Title>
      </div>
      <Swiper
        slidesPerView={"4"}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="exampleSwiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide shadow-sm shadow-grey-700 my-5 rounded-xl cursor-pointer overflow-hidden   inline-block ">
              <img
                className="hover:scale-125 transition-transform duration-500"
                src={slide.img}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Examples;
