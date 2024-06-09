import React from "react";
import Logo from "./Logo";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-16 right-32 max-w-64">
        <Logo />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-2/3 font-normal uppercase text-white flex flex-col items-center gap-10 select-none whitespace-nowrap">
        <h4 className="text-7xl ">
          Знижки <span className="text-red-500 font-bold">-5%</span> на монтаж
        </h4>
        <a className="heartbeat-button hover:animate-none bg-gray-600  hover:bg-red-700 text-white text-2xl font-bold py-3 px-4  shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-360 cursor-pointer">
          Отримати зараз
        </a>
      </div>
      <img src="img/home/banner.webp" alt="" />
    </div>
  );
}

export default Banner;
