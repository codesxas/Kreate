import React from "react";
import Banner from "../components/banner/MainBanner";
import ProductDisplay from "../components/home/ProductDisplay";
import PromotionSec from "../components/home/PromotionSec";

function Home() {
  return (
    <div className="home">
      <Banner />
      <PromotionSec />
      <ProductDisplay />
    </div>
  );
}

export default Home;
