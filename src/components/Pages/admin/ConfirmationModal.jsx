import React from "react";
import {RiCloseLine} from "react-icons/ri";

function ConfirmationModal({productName, onConfirm, onCancel}) {
  return (
    <div className="confirm-modal fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white  rounded text-black">
        <div className="flex text-lg font-medium text-white p-2 bg-gray-700 items-center justify-between w-full">
          <h3 className="  ">Підтвердіть зміни</h3>
          <div onClick={onCancel} className="hover:text-red-500 cursor-pointer">
            <RiCloseLine />
          </div>
        </div>
        <p className="p-5">
          Ви впевнені, що хочете змінити{" "}
          <span className="font-semibold">"{productName}"</span> ?
        </p>
        <div className="flex p-5 justify-end mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={onCancel}>
            Ні
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}>
            Так
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
