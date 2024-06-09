import React from "react";
import {IoSearch} from "react-icons/io5";
import {FaOpencart} from "react-icons/fa6";
import {motion} from "framer-motion";
import Social from "../Social";
import Logo from "../Logo";
import Menu from "../Menu";
import {MyContext} from "../../context/myContext";

function Header({setShowSearch, setShowCart}) {
  const {cartProduct} = React.useContext(MyContext);
  return (
    <>
      <header className="flex h-[80px] select-none text-white bg-gradient-to-b bg-gray-700 backdrop-blur-sm bg-opacity-35  from-gray-800  px-20 fixed  z-10 items-center justify-between w-full  font-[500] ">
        <Logo />
        <Menu />
        <div className="flex text-2xl space-x-5">
          <IoSearch
            onClick={() => setShowSearch(true)}
            className="headerControls"
          />
          <div className="relative">
            <FaOpencart
              onClick={() => setShowCart(true)}
              className="headerControls"
            />
            {cartProduct.length > 0 && (
              <p className="bg-white bg-opacity-80 flex items-center justify-center p-2 rounded-full h-3 w-3 text-[10px] font-bold text-[red] absolute bottom-[-8px] right-[-8px]">
                {cartProduct.length}
              </p>
            )}
          </div>
        </div>
      </header>
      <motion.div
        initial={{scale: 0}}
        animate={{opacity: [0, 1], scale: 1, translateY: ["-50%"]}}
        transition={{delay: 1, duration: 0.3}}
        className="fixed rounded-md  shadow-md text-gray-600 flex flex-col space-y-6 z-50 text-4xl p-5 bg-red-600 bg-opacity-85 right-0 top-1/2 -translate-y-1/2  ">
        <Social />
      </motion.div>
    </>
  );
}

export default Header;
