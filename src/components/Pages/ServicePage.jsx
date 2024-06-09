import React from "react";
import Logo from "../Logo";
import {MdLocalPhone} from "react-icons/md";

function ServicePage() {
  return (
    <div className="service bg-[url(/img/services/service.jpeg)] min-h-screen pt-24  ">
      <h2 className="text-4xl mb-5 font-semibold text-white uppercase">
        Обслуговування
      </h2>
      <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-[3fr_1fr] text-left">
          <div className=" border border-gray-300">
            <h3 className="text-xl bg-gray-200 p-2 font-semibold">Тип</h3>
            <p className="p-2">Спліт система</p>
            <p className="p-2 border-t border-gray-300">
              Заправка кондиціонеру
            </p>
            <p className="p-2 border-t border-gray-300">Фреон 100г</p>
            <p className="p-2 border-t border-gray-300">
              Робота з драбини 2 поверх і вище
            </p>
          </div>
          <div className=" border border-gray-300">
            <h3 className="text-xl bg-gray-200 p-2 font-semibold">Ціна</h3>
            <p className="p-2">1200 грн</p>
            <p className="p-2 border-t border-gray-300">500 грн</p>
            <p className="p-2 border-t border-gray-300">200 грн</p>
            <p className="p-2 border-t border-gray-300">від 500 грн</p>
          </div>
        </div>
        <div>
          <div className="text-left border border-gray-200">
            <h3 className="text-xl bg-gray-200 p-2 font-semibold">
              Якщо виникли питання
            </h3>
            <div className="p-2 text-2xl flex items-center justify-center gap-2">
              <MdLocalPhone />
              <a className="" href="tel:+38(067)-452-77-88">
                +38(067)-452-77-88
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
