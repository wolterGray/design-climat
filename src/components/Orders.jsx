import React from "react";
import {FaTruck, FaTools, FaUsers, FaShieldAlt} from "react-icons/fa";
import Title from "./Title";

function Orders() {
  const orders = [
    {
      name: "Безкоштовна доставка",
      icon: <FaTruck />,
      description: "Безкоштовно доставимо обладнання до вашого об'єкту",
    },
    {
      name: "Гарантія на монтаж",
      icon: <FaTools />,
      description: "Надаємо гарантію на виконані роботи 2 роки",
    },
    {
      name: "Досвідчена команда",
      icon: <FaUsers />,
      description: "У нашій компанії спеціалісти з великим досвідом роботи",
    },
    {
      name: "Перевірені партнери",
      icon: <FaShieldAlt />,
      description:
        "Працюємо виключно з найкращими компаніями, які надають якісне обладнання",
    },
  ];

  return (
    <div className="  pt-20 pb-20 select-none border-b-2 border-t-2 border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <Title>мы пропонуемо</Title>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {orders.map((item) => (
            <div key={item.name} className="flex gap-x-5 items-center">
              <div className="p-6 h-max w-max bg-red-600 rounded-full text-white  text-6xl ">
                {item.icon}
              </div>
              <div className="text-left relative">
                <h4 className="text-xl  mb-2 whitespace-nowrap font-semibold">
                  {item.name}
                </h4>
                <p className="text-base ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
