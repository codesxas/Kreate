import React from "react";
import {
  HiUser,
  HiSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { IoMenuSharp } from "react-icons/io5";

type Props = {
  isMobile: boolean;
};

function NavIcons({ isMobile }: Props) {
  return (
    <React.Fragment>
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

      {isMobile && (
        <span className="nav-icon">
          <IoMenuSharp className="hamburger" />
        </span>
      )}
    </React.Fragment>
  );
}

export default NavIcons;
