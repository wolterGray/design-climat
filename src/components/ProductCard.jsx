import React from "react";
import CustomBtn from "./CustomBtn";
import ProductCharacteristics from "./ProductCharacteristics";
import {NavLink, useLocation} from "react-router-dom";
import {FaOpencart} from "react-icons/fa6";
import {IoCheckmarkDoneSharp} from "react-icons/io5";
import {MyContext} from "../context/myContext";
import {motion} from "framer-motion";

function ProductCard(item) {
  const characteristic = item?.characteristics;
  const path = item.category === "household" ? "household" : "multi-split";
  const [addCart, setAddCart] = React.useState(false);
  const { setCartProduct, cartProduct } = React.useContext(MyContext);

  function onClickAdd() {
    const isInCart = cartProduct.some((product) => product.id === item.id);
    let updatedCart;
    if (isInCart) {
      updatedCart = cartProduct.filter((product) => product.id !== item.id);
      setAddCart(false);
    } else {
      updatedCart = [...cartProduct, item];
      setAddCart(true);
    }
    setCartProduct(updatedCart);
  }

  React.useEffect(() => {
    const isInCart = cartProduct.some((product) => product.id === item.id);
    setAddCart(isInCart);
  }, [cartProduct, item.id]);

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="pb-3 h-max select-none duration-150 relative hover:shadow-gray-400 cursor-pointer rounded-lg shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      <NavLink to={`/${path}/${item.id}`}>
        <div className="min-h-80 max-h-80">
          <img className="object-cover" src={item.imgPath[0]} alt="" />
        </div>
        <div className="px-3">
          <h3 className="text-base h-[80px] font-semibold text-gray-500">
            {item.name}
          </h3>
          {characteristic.slice(0, 4).map((char, index) => (
            <div key={index} className="text-xs">
              <ProductCharacteristics key={char.value} item={char.name} info={char.value} />
            </div>
          ))}
        </div>
      </NavLink>
      <div className="text-sm px-3 flex justify-between items-center mt-5">
        <div className="w-1/2 flex gap-2 items-center">
          <CustomBtn>Купити</CustomBtn>
          <div onClick={onClickAdd}>
            <div
              className={`${
                addCart ? "bg-[green] border-[none] text-white" : "bg-white border-red-500 text-red-500"
              } text-xl hover:scale-110 opacity-80 border rounded-xl p-2 transition-all`}
            >
              {addCart ? <IoCheckmarkDoneSharp /> : <FaOpencart />}
            </div>
          </div>
        </div>
        <p className="font-semibold">{item.price}грн</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
