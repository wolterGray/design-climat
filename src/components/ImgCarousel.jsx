import React from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {motion} from "framer-motion";

function ImgCarousel({imgPath}) {
  const [count, setCount] = React.useState(0);
  function incCount() {
    setCount((prevCount) =>
      prevCount === imgPath.length - 1 ? 0 : prevCount + 1
    );
  }
  function reduceCount() {
    setCount((prevCount) =>
      prevCount === 0 ? imgPath.length - 1 : prevCount - 1
    );
  }
  return (
    <div className=" select-none ">
      <div className="relative mb-10  ">
        <div className="h-[500px] w-full">
          <img
            className="object-contain w-full h-full"
            src={imgPath && imgPath[count]}
            alt=""
          />
        </div>
        <div
          onClick={reduceCount}
          className="absolute hover:scale-110 hover:text-red-500 transition-transform flex justify-between left-0 text-4xl cursor-pointer top-1/2 -translate-x-1/2   ">
          <FaAngleLeft />
        </div>
        <div
          onClick={incCount}
          className="absolute hover:scale-110 transition-transform flex justify-between right-0 text-4xl hover:text-red-500  border-gray-300 cursor-pointer top-1/2 -translate-x-1/2">
          <FaAngleRight />
        </div>
      </div>
      <div className="grid grid-cols-4 space-x-2">
        {imgPath?.map((image, index) => (
          <div
            key={index}
            onClick={() => setCount(index)}
            className={`cursor-pointer rounded-lg overflow-hidden px-5 ${
              count === index &&
              " shadow-[0px_0px_4px_1px] shadow-gray-200 transition-all duration-500"
            }`}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgCarousel;
