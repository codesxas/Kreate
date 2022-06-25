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
    <React.Fragment>
      <div className="header desktop-view">
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
      </div>

      <div className="header mobile-view">
        <div className="container">
          <div className="row">
            <div className="col-4 brand-logo">
              <img src={Logo} alt="kreate-logo" />
              <p>Kreate</p>
            </div>

            <div className="col-8">
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
              <span className="nav-icon">
                <IoMenuSharp className="hamburger" />
              </span>
            </div>
          </div>
        </div>

        <div className="nav-list d-none">
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
      </div>
    </React.Fragment>
  );
}

export default Header;
