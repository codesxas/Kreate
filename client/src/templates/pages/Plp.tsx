import React from "react";
import Grid from "../components/common/product/Grid";
import Filter from "../components/plp/Filter";

function Category(props: any) {
  return (
    <React.Fragment>
      <div className="container">
        <Filter />
        <Grid />
      </div>
    </React.Fragment>
  );
}

export default Category;
