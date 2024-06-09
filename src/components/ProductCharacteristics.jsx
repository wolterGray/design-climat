import React from "react";

function ProductCharacteristics({item, info}) {
  return (
    <div className="flex m-0  whitespace-nowrap justify-between">
      <span className="font-bold ">{item}</span>
      <span className=" mb-0">{info}</span>
    </div>
  );
}

export default ProductCharacteristics;
