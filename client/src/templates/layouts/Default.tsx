import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../components/header/DefaultHeader";
import Footer from "../components/footer/DefaultFooter";
import BreadCrumb from "../components/common/BreadCrumb";

function Default() {
  return (
    <div className="main">
      <Header />
      <BreadCrumb />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Default;
