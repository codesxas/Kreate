import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../components/header/DefaultHeader";
import Footer from "../components/footer/DefaultFooter";
import BreadCrumb from "../components/common/BreadCrumb";

function Cart(props: any) {
  console.log("first", props);

  return (
    <div className="main">
      <Header />
      <BreadCrumb {...props} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Cart;
