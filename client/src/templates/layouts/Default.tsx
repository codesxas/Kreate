import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../components/header/LandingHeader";
import Footer from "../components/footer/DefaultFooter";

function Default() {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Default;
