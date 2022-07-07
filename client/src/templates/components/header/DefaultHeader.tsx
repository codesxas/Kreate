import React from "react";

import Logo from "../../../assets/images/logo.png";
import NavList from "./components/desktop/NavList";
import NavIcons from "./components/NavIcons";

function Header() {
  return (
    <div className="header alt-view">
      <div className="row">
        <div className="col-lg-2 brand-logo">
          <img src={Logo} alt="kreate-logo" />
          <p>Kreate</p>
        </div>

        <div className="col-lg-8">
          <NavList />
        </div>

        <div className="col-lg-2">
          <NavIcons isMobile={false} />
        </div>
      </div>
    </div>
  );
}

export default Header;
