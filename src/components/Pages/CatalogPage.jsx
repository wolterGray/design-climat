import React from "react";
import Title from "../Title";
import FilterLists from "../FilterLists";
import "rc-slider/assets/index.css";
import ProductCard from "../ProductCard";
import PriceSlider from "../PriceSlider";
import {TbAdjustmentsQuestion} from "react-icons/tb";

const filterList = [
  {
    id: 1,
    title: "Бренди",
    items: ["COOPER&HUNTER", "Tosot", "Olmo"],
  },
  {
    id: 2,
    title: "Тип",
    items: ["Моноблок", "Спліт-система"],
  },
  {
    id: 3,
    title: "Тип компрессору",
    items: ["Інверторний", "Звичайний"],
  },
  {
    id: 4,
    title: "Тип встановлення внутрішнього блоку",
    items: ["Мобільний", "Підлого-стельовий", "Підлоговий", "Настінний"],
  },
  {
    id: 5,
    title: "Площа приміщення, кв.м",
    items: ["15", "25", "27", "34", "50", "до 100"],
  },
  {
    id: 6,
    title: "Фреон",
    items: ["R-32", "R-410A"],
  },
  {
    id: 7,
    title: "Wi-Fi",
    items: ["Так", "Ні"],
  },

  {
    id: 8,
    title: "Колір",
    items: ["Білий", "Чорний", "Золотий"],
  },
];

function CatalogPage({airConditioners, title}) {
  const [productData, setProductData] = React.useState([]);
  const [activeFilters, setActiveFilters] = React.useState({
    brands: [],
    type: [],
    compressor: [],
    blockType: [],
    area: [],
    freon: [],
    wifi: [],
    color: [],
  });

  const [priceRange, setPriceRange] = React.useState([0, 100000]);

  function changeActiveFilter(name, status, param) {
    setActiveFilters((prev) => {
      if (status && !prev[param].includes(name)) {
        return {
          ...prev,
          [param]: [...prev[param], name],
        };
      } else if (!status && prev[param].includes(name)) {
        return {
          ...prev,
          [param]: prev[param].filter((param) => param !== name),
        };
      } else {
        return prev;
      }
    });
  }

  function productFilter(name, id, status) {
    if (id === 1) {
      changeActiveFilter(name, status, "brands");
    }
    if (id === 2) {
      changeActiveFilter(name, status, "type");
    }
    if (id === 3) {
      changeActiveFilter(name, status, "compressor");
    }
    if (id === 4) {
      changeActiveFilter(name, status, "blockType");
    }
    if (id === 5) {
      changeActiveFilter(name, status, "area");
    }
    if (id === 6) {
      changeActiveFilter(name, status, "freon");
    }
    if (id === 7) {
      changeActiveFilter(name, status, "wifi");
    }

    if (id === 8) {
      changeActiveFilter(name, status, "color");
    }
  }

  function filteredProducts() {
    return airConditioners?.filter((product) => {
      const price = parseFloat(product.price);
      // Проверяем, соответствует ли продукт всем активным фильтрам
      return (
        (activeFilters.brands.length === 0 ||
          activeFilters.brands.some((brand) =>
            product.company.toLowerCase().includes(brand.toLowerCase())
          )) &&
        (activeFilters.type.length === 0 ||
          activeFilters.type.some((type) =>
            product.characteristics
              .find((char) => char.name.toLowerCase() === "тип:")
              .value.toLowerCase()
              .includes(type.toLowerCase())
          )) &&
        (activeFilters.compressor.length === 0 ||
          activeFilters.compressor.some((compressor) =>
            product.characteristics
              .find((char) => char.name.toLowerCase() === "тип компрессору:")
              .value.toLowerCase()
              .includes(compressor.toLowerCase())
          )) &&
        (activeFilters.blockType.length === 0 ||
          activeFilters.blockType.some((blockType) =>
            product.characteristics
              .find((char) => char.name.toLowerCase() === "тип встановлення:")
              .value.toLowerCase()
              .includes(blockType.toLowerCase())
          )) &&
        (activeFilters.area.length === 0 ||
          activeFilters.area.includes(
            product.characteristics
              .find((char) => char.name.toLowerCase() === "площа:")
              .value.toLowerCase()
          )) &&
        (activeFilters.freon.length === 0 ||
          activeFilters.freon.some((freon) =>
            product.characteristics
              .find((char) => char.name.toLowerCase() === "фреон:")
              .value.toLowerCase()
              .includes(freon.toLowerCase())
          )) &&
        (activeFilters.wifi.length === 0 ||
          activeFilters.wifi.some((wifi) =>
            product.characteristics
              .find((char) => char.name.toLowerCase() === "wi-fi:")
              .value.toLowerCase()
              .includes(wifi.toLowerCase())
          )) &&
        (activeFilters.color.length === 0 ||
          activeFilters.color.some((color) =>
            product.characteristics
              .find((char) => char.name.toLowerCase() === "колір")
              .value.toLowerCase()
              .includes(color.toLowerCase())
          )) &&
        price >= priceRange[0] &&
        price <= priceRange[1]
      );
    });
  }

  React.useEffect(() => {
    setProductData(filteredProducts());
  }, [activeFilters, priceRange, airConditioners]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setProductData(airConditioners);
  }, [airConditioners]);

  return (
    <div className="max-w-[90%] mx-auto mb-10 min-h-screen pt-[100px] text-start">
      <div className="mb-10">
        <Title>{title}</Title>
      </div>
      <div className="grid grid-cols-[1fr,3fr] gap-10  text-lg  ">
        <div>
          {filterList.map((category, index) => (
            <FilterLists
              key={index}
              filterList={category}
              productFilter={productFilter}
            />
          ))}
          <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>
        {productData?.length > 0 ? (
          <div className="grid grid-cols-3 gap-5">
            {productData.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-2xl flex opacity-35 justify-center ">
            <div className="flex items-center gap-2 h-max">
              <p>За обранним фільтром продуктів не знайдено.</p>{" "}
              <TbAdjustmentsQuestion />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
