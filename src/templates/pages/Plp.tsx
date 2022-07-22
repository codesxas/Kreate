import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/unsplash";

import { getProductData, ImageContext } from "../../helpers";

import Grid from "../components/common/product/Grid";
import Filter from "../components/plp/Filter";

function Category(props: any) {
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
    <div className="container">
      <Filter />

      {!loadingItems && images.results ? (
        <ImageContext.Provider value={getProductData(images)}>
          <Grid />
        </ImageContext.Provider>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default Category;
