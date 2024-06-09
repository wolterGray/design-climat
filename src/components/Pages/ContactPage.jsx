import React from "react";
import {IoPhonePortraitOutline} from "react-icons/io5";
import {GiPositionMarker} from "react-icons/gi";
import {MdMarkunread} from "react-icons/md";
import {motion} from "framer-motion";

import Logo from "../Logo";

function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[url('img/home/bg.jpg')] h-screen ">
        <motion.div
          animate={{scale: [0, 1], opacity: [0, 1]}}
          transition={{duration: 0.7}}
          className="w-full pt-20 h-full relative z-[1] flex flex-col justify-center items-center gap-10">
          <h2 className="text-4xl text-white font-bold mb-4">
            Зв'язатися з нами
          </h2>
          <div className="flex justify-between">
            <div className="text-red-500 px-10 text-lg flex flex-col justify-center items-center">
              <IoPhonePortraitOutline className="text-4xl mb-3" />
              <p className="font-medium">Телефон</p>
              <a className="text-white text-sm" href="tel:">
                (067)-452-77-88
              </a>
              
            </div>
            <div className="text-red-500 border-r border-l px-10 text-lg flex flex-col justify-center items-center">
              <GiPositionMarker className="text-4xl mb-3" />
              <p className="font-medium">Адреса</p>
              <a className="text-white text-sm" href="">
                м.Ірпінь, Київська обл,
              </a>
              <a className="text-white text-sm" href="">
                вул.Васильківська буд.2
              </a>
            </div>
            <div className="text-red-500 px-10 text-lg flex flex-col justify-center items-center">
              <MdMarkunread className="text-4xl mb-3" />
              <p className="font-medium">Емейл</p>
              <a
                className="text-white text-sm"
                href="mailto:designclimat@gmail.com">
                designclimat@gmail.com
              </a>
              
            </div>
          </div>
          <h5 className="text-xl text-white font-semibold">
            Якщо у вас виникли питання, напишіть нам!
          </h5>
          <form
            className="w-[50%] mx-auto"
            onSubmit={() => {}}
            action="/submit"
            method="post">
            <div className="flex gap-5">
              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                required
                className="w-full outline-none rounded-lg text-white  bg-opacity-15 placeholder:text-gray-200 bg-gray-300  px-4 py-4 mb-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={formData.email}
                required
                className="w-full outline-none rounded-lg text-white bg-opacity-15 placeholder:text-gray-200 bg-gray-300 px-4 py-4 mb-4"
              />
            </div>
            <textarea
              name="message"
              style={{resize: "none"}}
              placeholder="Ваше повідомлення"
              value={formData.message}
              required
              className="w-full outline-none rounded-lg h-[15vh] bg-opacity-15 placeholder:text-gray-200 bg-gray-300 text-white  px-4 py-2 mb-4"></textarea>
            <button
              type="submit"
              className="btn max-h-10 text-white font-bold py-4 px-4  w-full">
              Надіслати
            </button>
          </form>
          <Logo />
        </motion.div>
      </div>
    </>
  );
}

export default ContactPage;
