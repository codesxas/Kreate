import React from "react";
import NavItem from "./NavItem";
import { nav_list } from "../../../../../data/Nav";

function NavList() {
  return (
    <div className="nav-list">
      {nav_list.map((item, index: number) => (
        <React.Fragment key={index}>
          <NavItem
            title={item.title}
            link={item.link}
            subMenu={item.subMenu}
            megaSubMenu={item.megaSubMenu}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavList;
