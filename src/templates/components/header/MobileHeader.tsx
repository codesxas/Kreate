import React from "react";
import Logo from "../../../assets/images/logo.png";
import NavIcons from "./components/NavIcons";

import { IoChevronUp } from "react-icons/io5";
import NavList from "./components/mobile/NavList";

function MobileHeader() {
  return (
    <div className="header mobile-view">
      <div className="container">
        <div className="row">
          <div className="col-4 brand-logo">
            <img src={Logo} alt="kreate-logo" />
            <p>Kreate</p>
          </div>

          <div className="col-8">
            <NavIcons isMobile={true} />
          </div>
        </div>
      </div>

      <NavList />
    </div>
  );
}

export default MobileHeader;
