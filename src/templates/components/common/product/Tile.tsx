import React from "react";
import {
  HiSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { IoShuffleSharp } from "react-icons/io5";

import { ProductInterface } from "../../../../interfaces";

function Tile(props: ProductInterface) {
  const { url, alt_description, owner_name, actual_price, discounted_price } =
    props;

  return (
    <div className="tile">
      <div className="img-wrap">
        <span className="discount">-22%</span>

        <span className="favorite">
          <HiOutlineHeart />
        </span>

        <img src={url} alt="" />
      </div>

      <div className="info-wrap">
        <p className="product-name">
          {alt_description ? alt_description : "Item"}
        </p>

        <p className="owner-name">{owner_name}</p>

        <p className="product-price">
          {discounted_price ? (
            <React.Fragment>
              <span className="actual-price">₹{actual_price}</span>
              <span className="discounted-price">₹{discounted_price}</span>
            </React.Fragment>
          ) : (
            <span className="price">₹{actual_price}</span>
          )}
        </p>
      </div>

      <div className="act-btn">
        <div className="btn-item">
          <span className="custom-tooltip">Search</span>
          <HiSearch />
        </div>
        <div className="btn-item">
          <span className="custom-tooltip">Add to Cart</span>
          <HiOutlineShoppingCart />
        </div>
        <div className="btn-item">
          <span className="custom-tooltip">Compare</span>
          <IoShuffleSharp />
        </div>
      </div>
    </div>
  );
}

export default Tile;
