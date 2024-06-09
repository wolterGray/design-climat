import React from "react";
import { Link } from "react-router-dom";

function Offers() {
  const offers = [
    {
      id: 1,
      img: "img/offers/1.jpg",
      name: "Побутові кондиціонери",
      path: "household",
    },
    {
      id: 2,
      img: "img/offers/2.png",
      name: "Мульти-спліт системи",
      path: "split_systems",
    },
    {
      id: 3,
      img: "img/offers/3.jpg",
      name: "Послуги",
      path: "services",
    },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl pt-20 pb-20 mx-auto grid grid-cols-3 gap-x-10">
        {offers.map((item) => (
          <Link key={item.id} to={`/${item.path}`} className="servicesItem">
            <img
              className=" object-cover  w-full h-full"
              src={item.img}
              alt="household"
            />
            <h3 className="servicesTitle">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Offers;
