import React from "react";

function ButtonsGroup({selectCat}) {
  const [btnIndex, setBtnIndex] = React.useState(0);
  const value = ["Популярні", "Побутові", "Мульти-спліт"];
  function onClickCat(id) {
    setBtnIndex(id);
    selectCat(id);
  }
  React.useEffect(() => {
    onClickCat(0);
  }, []);
  return (
    <div className="flex justify-center space-x-10 mb-10 text-2xl">
      {value.map((value, id) => (
        <button
          key={id}
          onClick={() => onClickCat(id)}
          className={`${
            btnIndex === id
              ? "border-red-600 text-red-600"
              : "border-[transparent] text-gray-300"
          } border-b-2   `}
          href="#">
          {value}
        </button>
      ))}
    </div>
  );
}

export default ButtonsGroup;
