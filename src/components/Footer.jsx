import React from "react";
import Social from "./Social";
import Logo from "./Logo";
import {NavLink} from "react-router-dom";

function Footer() {
  return (
    <footer className="h-max p-10 select-none  bg-gray-700 text-gray-300  ">
      <div className="max-w-7xl h-full mx-auto flex justify-between  ">
        <div className="flex flex-col items-center">
          <div className="mb-5 max-w-52">
            <Logo />
          </div>
          <div>
            <p>Телефон:</p>
            <a className="text-2xl text-white" href="tel:0674527788">
              (067)-452-77-88
            </a>
          </div>
          <div>
            <p>Емейл:</p>
            <a
              className="text-2xl text-white"
              href="mailto:designclimat@gmail.com">
              designclimat@gmail.com
            </a>
          </div>
          <div className="flex justify-center space-x-4 text-3xl mt-5">
            <Social />
          </div>
        </div>
        <div className=" text-start">
          <h4 className="text-2xl mb-5 text-white">Каталог</h4>
          <ul>
            <li className="mb-2">
              <NavLink to="/services">Послуги</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to={"/split_systems"}>Мульти-спліт системи</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to={"/household"}>Побутові кондиціонери</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className=" text-start mb-5">
            <h4 className="text-2xl mb-5 text-white">Графік Роботи</h4>
            <ul>
              <li className="mb-2">Пн - Пт.: 9:00 - 19:00</li>
              <li className="mb-2">Сб.: 10:00 - 16:00</li>
              <li className="mb-2">Нд.: вихідний.</li>
            </ul>
          </div>
          <div className=" text-start">
            <h4 className="text-2xl mb-5 text-white">Адреса магазину</h4>
            <ul>
              <li className="mb-2">м.Ірпінь, Київська обл,</li>
              <li className="mb-2">вул.Васильківська буд.2</li>
            </ul>
          </div>
        </div>
        <div className=" text-start">
          <h4 className="text-2xl mb-5 text-white">Клієнтам</h4>
          <ul>
            <li className="mb-2">
              <NavLink to={"/about"}>Про нас</NavLink>
            </li>
            <li className="mb-2">Оплата і доставка</li>

            <li className="mb-2">
              <NavLink to={"/contact"}>Контакти</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
