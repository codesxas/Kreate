import React from "react";
import {
  HiUser,
  HiSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";

import { IoChevronDown, IoChevronUp, IoMenuSharp } from "react-icons/io5";
import Logo from "../../../assets/images/logo.png";

function Header() {
  return (
    <div className="header alt-view">
      <div className="row">
        <div className="col-lg-2 brand-logo">
          <img src={Logo} alt="kreate-logo" />
          <p>Kreate</p>
        </div>

        <div className="col-lg-8 nav-list">
          <div className="nav-link">
            Personal Care
            <IoChevronDown />
          </div>
          <div className="nav-link">
            Home & Living
            <IoChevronDown />
          </div>
          <div className="nav-link">
            Clothing
            <IoChevronDown />
          </div>
          <div className="nav-link">
            Pet Care
            <IoChevronDown />
          </div>
          <div className="nav-link">
            Gifting
            <IoChevronDown />
          </div>
        </div>

        <div className="col-lg-2">
          <span className="nav-icon">
            <HiUser />
          </span>
          <span className="nav-icon">
            <HiSearch />
          </span>
          <span className="nav-icon">
            <HiOutlineHeart />
          </span>
          <span className="nav-icon">
            <HiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
