import React from "react";
import {MdLocalPhone} from "react-icons/md";

function InstallationPage() {
  return (
    <div className="service bg-[url(/img/services/installation.jpeg)]  ">
      <h2 className="text-3xl text-white mb-5 font-semibold ">
        МОНТАЖ ТА ВСТАНОВЛЕННЯ
      </h2>
      <div className="text-left max-w-7xl mx-auto rounded-lg overflow-hidden bg-white">
        <div className="grid grid-cols-[3fr_1fr_1fr]">
          <h3 className="text-xl bg-gray-200 p-2 border-gray-300 border  font-semibold">
            Послуга
          </h3>
          <h3 className="text-xl bg-gray-200 border-gray-300 border p-2 font-semibold">
            Одиниці
          </h3>
          <h3 className="text-xl bg-gray-200 border-gray-300 border p-2 font-semibold">
            Ціна
          </h3>
        </div>
        <div className="grid grid-cols-[3fr_1fr_1fr]">
          <p className="p-2 border-gray-300 border">
            Стандартний монтаж кондиціонеру
          </p>
          <p className="p-2 border-gray-300 border">Послуга</p>
          <p className="p-2 border-gray-300 border">3600грн</p>
        </div>
        <div className="grid grid-cols-[3fr_1fr_1fr]">
          <p className="p-2 border-gray-300 border">Закладання магістралі</p>
          <p className="p-2 border-gray-300 border">Метр погонний</p>
          <p className="p-2 border-gray-300 border">від 500грн</p>
        </div>
        <div className="grid grid-cols-[3fr_1fr_1fr]">
          <p className="p-2 border-gray-300 border">Додаткові роботи</p>
          <p className="p-2 border-gray-300 border">Метр погонний</p>
          <p className="p-2 border-gray-300 border">від 150грн</p>
        </div>
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
  );
}

export default InstallationPage;
