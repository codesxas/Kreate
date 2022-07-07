import { useEffect, useState } from "react";
import axios from "axios";

import { MainBanner as Banner } from "../components/banner";
import { ProductDisplay, PromotionSec } from "../components/home";
import { ImageContext } from "../../helpers";

const access_key = "JzH2-ho93mvapcblnlhMGUHdhkMgBMVgq9kilQiJeXc";

function Home() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages();
  }, []);

  const priceGenerator = (existing_price: number | undefined = 0) => {
    var price;
    const min = 100,
      max = existing_price ? existing_price : 1000;

    if (existing_price) {
      const shouldGeneratePrice = Math.round(Math.random());

      if (shouldGeneratePrice) {
        price = Math.floor(Math.random() * (max - min + 1) + min);
      } else {
        price = 0;
      }
    } else {
      price = Math.floor(Math.random() * max + min);
    }

    return price;
  };

  const getImages = () => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          page: 1,
          per_page: 15,
          query: "home decor",
          orientation: "portrait",
        },
        headers: {
          Authorization: "Client-ID " + access_key,
        },
      })
      .then((res) => {
        // console.log("response", res.data.results);
        const urls = res.data.results.map((item: any) => {
          let actual_price = priceGenerator();
          return {
            url: item.urls.regular,
            alt_description: item.alt_description,
            description: item.description,
            owner_name: item.user.username,
            actual_price,
            discounted_price: priceGenerator(actual_price),
          };
        });
        setImages(urls);
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  return (
    <div className="home">
      <Banner />
      <PromotionSec />

      <ImageContext.Provider value={images}>
        <ProductDisplay />
      </ImageContext.Provider>
    </div>
  );
}

export default Home;
