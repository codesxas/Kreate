import React from "react";
import Grid from "../common/product/Grid";

function ProductDisplay() {
  return (
    <React.Fragment>
      <div className="bs-sec typ-content">
        <p className="styled-title">Shop Now</p>
        <p className="sec-title">Shop our best-sellers</p>
      </div>

      <div className="bs-sec typ-product">
        <Grid />
      </div>
    </React.Fragment>
  );
}

export default ProductDisplay;
