import React from "react";

function Tile() {
  return (
    <div className="tile">
      <div className="img-wrap">
        <span className="discount">-22%</span>
        <img src="https://htmldemo.net/learts/learts/assets/images/product/s328/product-13.webp" alt="" />
      </div>

      <div className="info-wrap">
        <p className="product-name">Spicy Mango Pickle (500Kg)</p>
        <p className="owner-name">By Home Bliss</p>
        <p className="product-price">
          <span className="actual-price">₹ 218</span>
          <span className="discounted-price">₹ 170</span>
        </p>
      </div>
    </div>
  );
}

export default Tile;
