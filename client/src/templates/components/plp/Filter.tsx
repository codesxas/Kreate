import React from "react";

function Filter() {
  return (
    <React.Fragment>
      <div className="bs-sec typ-filter">
        <ul className="product-variation">
          <li className="active">All</li>
          <li>Hot Products</li>
          <li>New Products</li>
          <li>Sales Product</li>
        </ul>
        <ul className="product-filter">
          <div className="dropdown">
            <div className="dropdown-menu">Sort By</div>
            <ul>
              <li>What's new</li>
              <li>Price - low to high</li>
              <li>Price - high to low</li>
            </ul>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Filter;
