import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="pr-20">
      <ul className="flex items-center gap-x-10">
        <li>
          <NavLink  className="headerLink" to="/">
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink className="headerLink" to="/services">
            Послуги
          </NavLink>
        </li>
        <li>
          <NavLink className="headerLink" to="/about">
            Про нас
          </NavLink>
        </li>
        <li>
          <NavLink className="headerLink" to="/contact">
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
