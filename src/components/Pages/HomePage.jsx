import React from "react";
import Orders from "../Orders";
import TrendingProducts from "../TrendingProducts";
import Banner from "../Banner";
import Examples from "../Examples/Examples";
import Statistics from "../Statistics";
import HomeBanner from "../HomeBanner";
import Offers from "../Offers";

function HomePage({airConditioners}) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="bgHome min-h-screen relative">
      <HomeBanner />
      <Offers />
      <Orders />
      <TrendingProducts airConditioners={airConditioners} />
      <Banner />
      <Examples />
      <Statistics />
    </div>
  );
}

export default HomePage;
