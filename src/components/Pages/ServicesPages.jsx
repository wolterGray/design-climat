import React from "react";
import { NavLink } from "react-router-dom";

function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Монтаж",
      img: "img/services/installation.jpeg",
      path:"installation"
    },
    {
      id: 2,
      name: "Проектування",
      img: "img/services/plan.jpeg",
      path:"design"
    },
    {
      id: 3,
      name: "Обслуговування",
      img: "img/services/service.jpeg",
      path:"service"
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="services" className=" relative pt-24 mx-auto overflow-hidden">
      {services.map((service) => (
        <div
          className="h-[200px] hover:scale-110  transition-all duration-500 overflow-hidden mb-3 relative w-full cursor-pointer"
          key={service.id}>
          <NavLink to={service.path}>
            <img
              className="object-cover object-center w-full h-full"
              src={service.img}
              alt="service"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent opacity-80"></div>
            <h3 className="text-white uppercase text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {service.name}
            </h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ServicesPage;
