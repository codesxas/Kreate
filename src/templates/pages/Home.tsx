import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/unsplash";

import { getProductData, ImageContext } from "../../helpers";
import { MainBanner as Banner } from "../components/banner";
import { ProductDisplay, PromotionSec } from "../components/home";

function Home() {
  let dispatch = useDispatch();
  const { loadingItems, images } = useSelector(
    (state: any) => state.PostReducer
  );

  useEffect(() => {
    getImages();
  }, []);

  const getImages = (
    page = 1,
    per_page = 15,
    query = "home decor",
    orientation = "portrait"
  ) => {
    dispatch(actions.getItems({ page, per_page, query, orientation }));
  };

  return (
    <div className="home">
      <Banner />
      <PromotionSec />

      {!loadingItems && images.results ? (
        <ImageContext.Provider value={getProductData(images)}>
          <ProductDisplay />
        </ImageContext.Provider>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default Home;
