import React from "react";

import AdminInfoItem from "./AdminInfoItem";

function AdminInfoContacts({companyDetails}) {
  console.log(companyDetails);
  return (
    <div className="cardStyle h-full ">
      <h2 className="text-md uppercase font-medium p-1 ">Contacts</h2>
      <div className="text-start font-semibold text-gray-400">
        <h3 className="px-5 py-2 font-semibold">Address</h3>
        <AdminInfoItem name={"City"} param={companyDetails.address[0]} />
        <AdminInfoItem name={"Street"} param={companyDetails.address[1]} />
      </div>
      <div className="text-start text-gray-400">
        <h3 className="px-5 py-2 font-semibold">Contacts</h3>
        <AdminInfoItem name={"Email"} param={companyDetails.email[0]} />
        <AdminInfoItem name={"Phone"} param={companyDetails.phoneNumber[0]} />
      </div>
      <div className="text-start text-gray-400">
        <h3 className="px-5 py-2 font-semibold">Links</h3>

        <AdminInfoItem
          name={"Instagram"}
          param={companyDetails.socials[0].instagram}
        />
        <AdminInfoItem
          name={"Facebook"}
          param={companyDetails.socials[0].facebook}
        />
      </div>
    </div>
  );
}

export default AdminInfoContacts;
