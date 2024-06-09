import React from "react";
import {HiPencil} from "react-icons/hi2";
import AdminProductsList from "./AdminProductsList";
import EditContactForm from "./EditContactForm";

function AdminContactsItem({title, params}) {
  const [editVisible, setEditVisible] = React.useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setEditVisible(true)}
        onMouseLeave={() => setEditVisible(false)}
        className="p-1">
        <div className=" flex gap-2">
          <div className="text-red-500 flex items-center gap-2 justify-between w-full">
            <p>{params}</p>
            {editVisible && <HiPencil />}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminProducts({
  airConditioners,
  companyDetails,
  setShowCreateModal,
  setEditProduct,
}) {
  const [activeBlock, setActiveBlock] = React.useState("list");

  const productsData =
    airConditioners && airConditioners.household && airConditioners.multisplit
      ? [...airConditioners.household, ...airConditioners.multisplit]
      : [];

  return (
    <div className="cardStyle h-screen">
      <div className="pb-2 h-full">
        <div className="h-full">
          <div className=" border-r-2 h-full border-opacity-50 border-grey-800">
            <div className="text-md  max-h-max uppercase font-medium p-2 bg-grey-800 flex items-center w-full justify-center gap-5">
              <h2
                className={`cursor-pointer ${
                  activeBlock === "list" && "text-red-600"
                }`}
                onClick={() => setActiveBlock("list")}>
                Products list
              </h2>
              /
              <h2
                className={`cursor-pointer ${
                  activeBlock === "info" && "text-red-600"
                }`}
                onClick={() => setActiveBlock("info")}>
                Information
              </h2>
            </div>
            {activeBlock === "list" ? (
              <AdminProductsList
                setShowCreateModal={setShowCreateModal}
                setEditProduct={setEditProduct}
                productsData={productsData}
              />
            ) : (
              <EditContactForm initialData={companyDetails.contacts} />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2"></div>
      </div>
      {/* <div className="grid grid-cols-2 gap-3 h-full">
        
        <div className="cardStyle ">
          <h2 className="text-xl bg-grey-800 uppercase font-medium p-2 ">
            Information
          </h2>
        </div>
      </div> */}
    </div>
  );
}

export default AdminProducts;
