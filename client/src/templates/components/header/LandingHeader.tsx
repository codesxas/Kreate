import React from "react";
import {
  HiUser,
  HiSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";

import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Logo from "../../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-8 brand-logo">
            <img src={Logo} alt="kreate-logo" />
            <p>Kreate</p>
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

      <div className="nav-list">
        <div className="nav-link">
          Personal Care
          <IoChevronDown />
        </div>
        <div className="nav-link">
          Food
          <IoChevronDown />
        </div>
        <div className="nav-link">
          Home Decor
          <IoChevronDown />
        </div>
        <div className="nav-link">
          Accessories
          <IoChevronDown />
        </div>
        <div className="nav-link">
          Clothing
          <IoChevronDown />
        </div>
        <div className="nav-link">
          Health & Wellness
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
    </div>
  );
}

export default Header;
