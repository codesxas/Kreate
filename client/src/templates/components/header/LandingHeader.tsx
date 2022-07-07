import React from "react";

import Logo from "../../../assets/images/logo.png";
import NavList from "./components/desktop/NavList";
import NavIcons from "./components/NavIcons";

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
              <NavIcons isMobile={false} />
            </div>
          </div>
        </div>

        <NavList />
      </div>
    </React.Fragment>
  );
}

export default Header;
