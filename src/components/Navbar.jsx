import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/Group 14.svg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="d-flex items-center justify-center bg-theme-LightBlue p-4 text-white lg:p-2">
        <p>
          GRATE VALUE FOR A FRACTION OF THE COST, PLUS FREE ACCESS DURING THE
          BETA PHASE
        </p>
      </div>
      <nav className="bg-theme-LightGray">
        <div className="container flex w-auto items-center justify-between gap-8 px-4 py-2 lg:mx-[200px] lg:justify-start lg:px-0">
          <NavLink className="" to="/">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
          <button
            className="flex pt-2 lg:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClicked(!clicked)}
          >
            <i
              className={
                "text-[24px] " + (clicked ? "fas fa-times" : "fas fa-bars")
              }
            ></i>
          </button>
          <div className="hidden flex-col lg:flex lg:flex-1 lg:flex-row lg:justify-between">
            <ul className="flex items-center gap-5 text-theme-DarkBlue">
              <li className="nav-link">
                <NavLink aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink aria-current="page" to="/priceweb">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink aria-current="page" to="/apidoc/start">
                  API
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink aria-current="page" to="/support">
                  Support
                </NavLink>
              </li>
            </ul>
            <ul className="flex items-center gap-2 text-theme-DarkBlue">
              <li>
                <NavLink aria-current="page" to="/contactus">
                  Login
                </NavLink>
              </li>
              <span>|</span>
              <li>
                <NavLink aria-current="page" to="/contactus">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
