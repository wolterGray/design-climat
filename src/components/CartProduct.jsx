import React from "react";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import {IoMdCloseCircle} from "react-icons/io";
import {MyContext} from "../context/myContext";
import {Link} from "react-router-dom";

function CartProduct({
  id,
  imgPath,
  name,
  price,
  count,
  characteristics,
  category,
  setProductsSummary,
}) {
  const [productCount, setProductCount] = React.useState(count || 1);
  const [trashVisible, setTrashVisible] = React.useState(false);
  const {cartProduct, setCartProduct} = React.useContext(MyContext);
  const path = category === "household" ? "household" : "multi-split";

  function incProductCount() {
    const newCount = productCount + 1;
    setProductCount(newCount);
    setProductsSummary((prev) => prev + price);

    setCartProduct((prev) =>
      prev.map((product) =>
        product.id === id ? {...product, count: newCount} : product
      )
    );
  }

  function decProductCount() {
    if (productCount > 1) {
      const newCount = productCount - 1;
      setProductCount(newCount);
      setProductsSummary((prev) => prev - price);

      setCartProduct((prev) =>
        prev.map((product) =>
          product.id === id ? {...product, count: newCount} : product
        )
      );
    }
  }

  const onCartProductDelete = (id) => {
    const removedProduct = cartProduct.find((product) => product.id === id);
    const updatedCartProduct = cartProduct.filter(
      (product) => product.id !== id
    );
    setCartProduct(updatedCartProduct);

    // Вычисляем общую стоимость, учитывая количество каждого товара
    let newTotalPrice = updatedCartProduct.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);

    // Если удаленный продукт найден, вычитаем только его стоимость, умноженную на его количество, из общей суммы
    if (removedProduct) {
      newTotalPrice -= removedProduct.price * removedProduct.count;
    }

    setProductsSummary(newTotalPrice);
  };

  function TruncateText(text) {
    if (text?.length <= 20) {
      return <span>{text}</span>;
    } else {
      const truncatedText = text?.substring(0, 20) + "...";
      return <span>{truncatedText}</span>;
    }
  }
  return (
    <div
      onMouseEnter={() => setTrashVisible(true)}
      onMouseLeave={() => setTrashVisible(false)}
      className="flex relative gap-5 justify-between items-center p-2 m-2  bg-gray-300 rounded-xl shadow-sm ">
      <div>
        <img className="max-h-20 rounded-md" src={imgPath[0]} alt="" />
      </div>
      <div className="text-left flex-1">
        <Link to={`/${path}/${id}`} className="mb-1">
          <h4 className="font-semibold text-gray-700 text-sm">
            {TruncateText(name)}
          </h4>
          <p className=" text-sm text-gray-700">{characteristics[0].value}</p>
        </Link>

        <div className="flex items-center gap-1 select-none">
          <CiCircleMinus
            onClick={decProductCount}
            className="text-gray-700 text-xl cursor-pointer"
          />
          <div className="text-xs select-none flex items-center justify-center font-semibold bg-white rounded-full h-4 w-4">
            <p>{productCount}</p>
          </div>

          <CiCirclePlus
            onClick={incProductCount}
            className="cursor-pointer text-xl text-gray-700"
          />
        </div>
      </div>

      {trashVisible && (
        <div className=" p-1 text-xl text-gray-600 cursor-pointer absolute right-4 hover:text-red-500">
          <IoMdCloseCircle onClick={() => onCartProductDelete(id)} />
        </div>
      )}
    </div>
  );
}

export default CartProduct;
