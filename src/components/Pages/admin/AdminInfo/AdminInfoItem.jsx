import React from "react";
import {HiPencil, HiTrash} from "react-icons/hi2";

function AdminInfoItem({name, param}) {
  const [editVisible, setEditVisible] = React.useState(false);
  return (
    <div className="text-start px-10 py-1 font-medium text-gray-300 h-full flex flex-col ">
      <div
        onMouseEnter={() => setEditVisible(true)}
        onMouseLeave={() => setEditVisible(false)}
        className="flex gap-2 p-2 bg-gray-600   ">
        <p>{name}:</p>
        <div className="flex  items-center justify-between w-full gap-5">
          <p className="text-red-500">{param}</p>
          {editVisible && (
            <div className="flex items-center gap-1 ">
              <div className="  text-md text-gray-400 cursor-pointer  hover:text-red-500">
                <HiPencil />
              </div>
              <div className="  text-md text-gray-400 cursor-pointer hover:text-red-500">
                <HiTrash />
              </div>
            </div>
          )}
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default AdminInfoItem;
