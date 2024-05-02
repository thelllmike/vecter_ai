import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
// import QuickStart from "./APIPages/QuickStart";
// import Pricing from "./APIPages/Pricing";
import footerImage from "../images/footer.jpg";

const APIDoc = () => {
  return (
    <div className="apiDoc">
      <Navbar />
      <div className="container mt-10">
        <div className="grid grid-cols-12">
          <div className=" col-span-1 lg:col-span-2 max-h-screen w-full lg:border-r-2 lg:border-theme-DarkGray">
            <SideNav />
          </div>
          <div className=" col-span-11 lg:col-span-10 pl-6">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="container-fluid footer mt-5">
        <div className="row">
          <img src={footerImage} alt="Footer" />
        </div>
      </div>
    </div>
  );
};
export default APIDoc;
