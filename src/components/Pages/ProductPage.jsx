import React from "react";
import CustomBtn from "../CustomBtn";
import ProductCharacteristics from "../ProductCharacteristics";
import {IoShieldCheckmarkSharp, IoCheckmarkDoneSharp} from "react-icons/io5";
import {FaOpencart} from "react-icons/fa6";
import ImgCarousel from "../ImgCarousel";
import Rating from "react-rating-stars-component";
import {useParams} from "react-router-dom";
import Logo from "../Logo";
import { MyContext } from "../../context/myContext";

function ProductPage({airConditioners}) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [addCart, setAddCart] = React.useState(false);
  const {setCartProduct, cartProduct} =React.useContext(MyContext);

  const {id} = useParams();
  const airConditioner = airConditioners?.find(
    (conditioner) => conditioner.id === id
  );
  const characteristic = airConditioner?.characteristics;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const isInCart = cartProduct.some(
      (product) => product.id === airConditioner?.id
    );
    setAddCart(isInCart);
  }, [cartProduct, airConditioner?.id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onClickAdd = () => {
    const isInCart = cartProduct.some(
      (product) => product.id === airConditioner.id
    );
    let updatedCart;
    if (isInCart) {
      updatedCart = cartProduct.filter(
        (product) => product.id !== airConditioner.id
      );
      setAddCart(false);
    } else {
      updatedCart = [...cartProduct, airConditioner];
      setAddCart(true);
    }
    setCartProduct(updatedCart);
  };

  return (
    <div className="text-left min-h-screen pt-24 pb-10 grid gap-3 grid-cols-2 max-w-7xl mx-auto">
      <div>
        <ImgCarousel imgPath={airConditioner?.imgPath} />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">{airConditioner?.name}</h3>
        <div className="flex gap-2">
          <Rating
            classNames={"bg-gray-100 p-2 rounded-md"}
            count={5}
            value={5}
            edit={false}
          />
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
            <IoShieldCheckmarkSharp className="text-[green]" />
            <p className="font-semibold">В наявності</p>
          </div>
        </div>
        <div className="text-2xl grid grid-cols-[2fr_0.5fr_1fr] items-center gap-3 ">
          <p className="font-semibold bg-gray-100 p-3  rounded-md">
            {airConditioner?.price}₴
          </p>
          <div onClick={onClickAdd}>
            <div
              className={`${
                addCart
                  ? "bg-[green] text-white"
                  : "text-red-500 border-red-500"
              } opacity-80 border-2 p-4 rounded-lg flex justify-center cursor-pointer`}>
              {addCart ? <IoCheckmarkDoneSharp /> : <FaOpencart />}
            </div>
          </div>
          <CustomBtn>Купити</CustomBtn>
        </div>
        <div>
          <h3 className="text-xl mb-3 font-semibold">Характеристики</h3>
          <div className="text-md bg-gray-100 rounded-md">
            {characteristic?.map((char, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none p-3">
                <ProductCharacteristics item={char.name} info={char.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold">Залишити відгук</h2>
          <Rating
            classNames={"text-xl p-2 rounded-md"}
            count={5}
            value={3}
            size={30}
            edit={true}
          />
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full outline-none rounded-lg text-gray-700 bg-opacity-15 placeholder:text-gray-400 bg-gray-500 px-4 py-4 mb-4"
            />
          </div>
          <textarea
            name="message"
            style={{resize: "none"}}
            placeholder="Ваше повідомлення"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full outline-none rounded-lg h-[15vh] bg-opacity-15 placeholder:text-gray-400 bg-gray-500 text-gray-700 px-4 py-2 mb-4"></textarea>
          <button
            type="submit"
            className="btn text-white font-bold py-4 px-4 w-full">
            Надіслати
          </button>
        </form>
      </div>
      <div className="bg-gray-400 flex justify-center items-center">
        <Logo />
      </div>
    </div>
  );
}

export default ProductPage;
