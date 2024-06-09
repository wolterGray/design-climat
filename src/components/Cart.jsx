import React from "react";
import {RxCross1} from "react-icons/rx";
import {motion} from "framer-motion";
import CustomBtn from "./CustomBtn";
import CartProduct from "./CartProduct";
import {FaOpencart} from "react-icons/fa6";
import {MyContext} from "../context/myContext";

function Cart({setShowCart}) {
  const [productsSummary, setProductsSummary] = React.useState(0);
  const {cartProduct} = React.useContext(MyContext);

  function summaryPrice() {
    let totalSum = 0;
    cartProduct.forEach(function (object) {
      if (object.hasOwnProperty("count")) {
        totalSum += object.price * object.count;
      } else {
        totalSum += object.price;
      }
    });
    setProductsSummary(totalSum);
  }

  React.useEffect(() => {
    summaryPrice();
  }, [cartProduct]);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="fixed top-0 z-50 right-0 bg-gray-600 bg-opacity-75 backdrop-blur-lg h-full w-1/4 ">
      <div className="p-5 text-white border-b border-gray-400 flex items-center justify-between text-xl">
        <h4 className="font-semibold">Кошик</h4>
        <RxCross1
          className="cursor-pointer hover:text-red-500"
          onClick={() => setShowCart(false)}
        />
      </div>
      <div className=" overflow-scroll max-h-full pb-44">
        {cartProduct.length ? (
          cartProduct.map((item) => (
            <div key={item.id}>
              <CartProduct
                id={item.id}
                imgPath={item.imgPath}
                name={item.name}
                count={item.count}
                price={item.price}
                category={item.category}
                characteristics={item.characteristics}
                productsSummary={productsSummary}
                setProductsSummary={setProductsSummary}
              />
            </div>
          ))
        ) : (
          <div className="text-gray-400 font-semibold justify-center p-10 flex items-center gap-2 text-xl">
            <p>Кошик порожній</p>
            <FaOpencart className="text-4xl" />
          </div>
        )}
      </div>

      <div className="absolute p-2 bg-opacity-55 backdrop-blur-md bg-gray-600  bottom-0 w-full left-1/2 -translate-x-1/2">
        <p className="text-gray-700 text-xl font-semibold rounded-md p-2 bg-gray-200 mb-2">
          {productsSummary}₴
        </p>
        <CustomBtn>Замовити</CustomBtn>
      </div>
    </motion.div>
  );
}

export default Cart;
