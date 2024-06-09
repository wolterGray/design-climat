import React from "react";
import {LiaEditSolid} from "react-icons/lia";
import {LuScale3D} from "react-icons/lu";
import { BiCoinStack } from "react-icons/bi";
import { FaGears } from "react-icons/fa6";

function AdminNavBar() {
  const navBarList = [
    {
      item: "Edit",
      icon: <LiaEditSolid />,
      path: "/",
    },
    {
      item: "Statistic",
      icon: <LuScale3D />,
      path: "/",
    },
    {
      item: "Sales",
      icon: <BiCoinStack />,
      path: "/",
    },
    {
      item: "Tools",
      icon: <FaGears />,
      path: "/",
    }
  ];
  return (
    <div className="cardStyle  h-full shadow-xl shadow-[black] text-xl">
      <ul className=" flex flex-col  text-start ">
        {navBarList.map((list, index) => (
          <li
            className="border-b-[1px] border-opacity-5 hover:bg-gray-800  border-white p-5 cursor-pointer duration-150"
            key={index}>
            <a className="flex items-center gap-2" href="">
              <p>{list.icon}</p>
              <p>{list.item}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNavBar;
