import React from "react";
import {HiPencil, HiTrash} from "react-icons/hi2";

function AdminProductsCard({imgPath, name, price, item, setEditProduct}) {
  const [editVisible, setEditVisible] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setEditVisible(true)}
      onMouseLeave={() => setEditVisible(false)}
      onClick={() => setEditProduct(item)}
      className="flex cursor-pointer select-none relative gap-2 justify-between items-center p-1   bg-gray-300 hover:bg-gray-100 duration-150 rounded-xl shadow-sm ">
      <div>
        <img className="max-h-20 rounded-lg" src={imgPath[0]} alt="" />
      </div>
      <div className="text-left flex-1">
        <div className="mb-1">
          <h4 className="font-extrabold text-gray-700 text-[12px]">{name}</h4>
          <p className=" text-xs font-semibold text-gray-700">{price}₴</p>
        </div>
      </div>

      {editVisible && (
        <div className="flex items-center gap-1 p-3">
          <div className="  text-md text-gray-600 cursor-pointer  hover:text-red-500">
            <HiPencil />
          </div>
          <div className="  text-md text-gray-600 cursor-pointer hover:text-red-500">
            <HiTrash />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProductsCard;
