import React from "react";
import Title from "./Title";
import {RxCross1} from "react-icons/rx";
import {CiSearch} from "react-icons/ci";
import {motion} from "framer-motion";
import ProductCard from "./ProductCard";

function Search({setShowSearch}) {
  return (
    <motion.div
      animate={{opacity: [0, 1]}}
      exit={{opacity: 0}}
      className="searchWrap text-white flex justify-center items-center w-full h-full fixed z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0}}
        className=" w-[80%] h-max p-5 bg-gray-700 bg-opacity-80 z-10 relative rounded-xl">
        <div className="flex justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <CiSearch className="text-3xl" />
            {/* <Title>Пошук</Title> */}
          </div>
          <div className="flex-1">
            <input
              className=" bg-gray-200 rounded-xl  w-full text-2xl outline-none text-gray-600 p-3"
              type="search"
              placeholder="Вишукай товар"
            />
          </div>
          <RxCross1
            onClick={() => setShowSearch(false)}
            className="hover:text-red-500 text-3xl cursor-pointer"
          />
        </div>

        <div>{/* <ProductCard/> */}</div>
      </motion.div>
    </motion.div>
  );
}

export default Search;
