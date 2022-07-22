import React from "react";
import { IoChevronDown } from "react-icons/io5";

type Props = {
  title: string;
  link: string;
  subMenu: any;
  megaSubMenu: any;
};

function NavItem(props: Props) {
  return (
    <React.Fragment>
      <div className="nav-link">
        <span>Personal Care</span>
        <IoChevronDown />
      </div>
      <div className="nav-link">
        <span>Home & Living</span>
        <IoChevronDown />
      </div>
      <div className="nav-link">
        <span>Clothing</span>
        <IoChevronDown />
      </div>
      <div className="nav-link">
        <span>Pet Care</span>
        <IoChevronDown />
      </div>
      <div className="nav-link">
        <span>Gifting</span>
        <IoChevronDown />
      </div>
    </React.Fragment>
  );
}

export default NavItem;
