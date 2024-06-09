import React from "react";
import Carousel from "./Carousel/Carousel";
import ButtonsGroup from "./ButtonsGroup";

function TrendingProducts({airConditioners}) {
  const [productData, setProductData] = React.useState([]);

  function getPopularProduct() {
    const popularHouseholdProduct =
      airConditioners?.household?.filter((p) => p.range > 2) || [];
    const popularMultiSplitProduct =
      airConditioners?.multisplit?.filter((p) => p.range > 2) || [];
    setProductData([...popularHouseholdProduct, ...popularMultiSplitProduct]);
  }

  function selectCat(id) {
    switch (id) {
      case 0:
        getPopularProduct();
        break;
      case 1:
        setProductData(airConditioners?.household || []);
        break;
      case 2:
        setProductData(airConditioners?.multisplit || []);
        break;
      default:
        setProductData([]);
    }
  }

  React.useEffect(() => {
    getPopularProduct();
  }, [airConditioners]);

  return (
    <div className="trendingWrapper bg-white h-screen">
      <div className="max-w-7xl h-full mx-auto pt-10 pb-10 relative select-none items-center gap-5 grid grid-cols-[1fr_3fr]">
        <img
          className="h-full object-cover"
          src="img/trendingProducts/banner.jpg"
          alt=""
        />
        <div className="grid" style={{maxWidth: "1000px", minWidth: "100%"}}>
          <ButtonsGroup selectCat={selectCat} />
          <Carousel airConditioners={productData} />
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
