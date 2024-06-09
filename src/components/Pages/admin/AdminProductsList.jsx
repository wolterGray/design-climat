import React from "react";
import AdminProductsCard from "./AdminProductsCard";

function AdminProductsList({productsData, setShowCreateModal, setEditProduct}) {
  return (
    <div className="h-full ">
      <div className="text-start max-h-max font-medium ">
        <div className="grid grid-cols-2 border-b border-gray-700">
          <div className="flex justify-center h-full p-3 text-center items-center gap-2   border-gray-800">
            <input
              type="text"
              className="w-full p-2 rounded-lg outline-none bg-gray-500"
              placeholder="Search product"
            />
          </div>

          <div className="flex h-full justify-center  p-3 text-center items-center gap-2">
            <div className="grid grid-cols-2 gap-2 justify-center w-full  ">
              <div className="flex text-nowrap bg-gray-600 rounded-lg gap-5 justify-between items-center p-3 border-gray-800  h-full">
                <p>Total products:</p>
                <p className="px-8 py-2 bg-gray-700 rounded-lg font-semibold">
                  {productsData.length}
                </p>
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                className="w-full  hover:bg-red-600 duration-150 bg-red-700 p-3 rounded-lg font-semibold">
                + Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-max text-center items-center gap-2 p-3 border-gray-800 ">
        <p className="bg-gray-800 w-full px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-500 duration-150">
          All
        </p>
        <p className="bg-gray-800 w-full px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-500 duration-150">
          Cooper&Hunter
        </p>
        <p className="bg-gray-800 w-full px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-500 duration-150">
          Tosot
        </p>
        <p className="bg-gray-800 w-full px-5  py-2 rounded-lg cursor-pointer hover:bg-gray-500 duration-150">
          Olmo
        </p>
      </div>
      <div className="flex flex-col h-[calc(100%-200px)] overflow-scroll px-3 gap-2 pb-3">
        {productsData.map((item) => (
          <AdminProductsCard
            setEditProduct={setEditProduct}
            item={item}
            imgPath={item.imgPath}
            name={item.name}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminProductsList;
