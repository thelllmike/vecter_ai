import React, { useState } from "react";
import "../styles/Navbar.css";
import { useMediaQuery } from "../Hooks/use-media-query";
import { NavLink } from "react-router-dom";
import logo from "../images/Group 14.svg";
import { ScrollArea } from "./ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "../components/ui/sheet";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return isDesktop ? (
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
                <NavLink aria-current="page" to="/login">
                  Login
                </NavLink>
              </li>
              <span>|</span>
              <li>
                <NavLink aria-current="page" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ) : (
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

          <Sheet>
            <SheetTrigger open={isOpen} onOpenChange={setIsOpen}>
              {isOpen ? (
                <i className={"fas fa-times text-[24px]"}></i>
              ) : (
                <i className={"fas fa-bars text-[24px]"}></i>
              )}
            </SheetTrigger>
            <SheetContent className="p-0">
              <ScrollArea className="h-full">
                <ul className="mobileNav mt-6 flex flex-col items-start text-theme-DarkBlue">
                  <li className="nav-link w-full">
                    <SheetClose asChild>
                      <NavLink
                        className="flex w-full items-center gap-2 p-2"
                        aria-current="page"
                        to="/"
                      >
                        <i class="fa-solid fa-house"></i>
                        Home
                      </NavLink>
                    </SheetClose>
                  </li>
                  <li className="nav-link w-full">
                    <SheetClose asChild>
                      <NavLink
                        className="flex w-full items-center gap-2 p-2"
                        aria-current="page"
                        to="/priceweb"
                      >
                        <i class="fa-solid fa-tag"></i>
                        Pricing
                      </NavLink>
                    </SheetClose>
                  </li>
                  <li className="nav-link w-full">
                    <SheetClose asChild>
                      <NavLink
                        className="flex w-full items-center gap-2 p-2"
                        aria-current="page"
                        to="/apidoc/start"
                      >
                        <i class="fa-solid fa-code"></i>
                        API
                      </NavLink>
                    </SheetClose>
                  </li>
                  <li className="nav-link w-full">
                    <SheetClose asChild>
                      <NavLink
                        className="flex w-full items-center gap-2 p-2"
                        aria-current="page"
                        to="/support"
                      >
                        <i class="fa-solid fa-circle-info"></i>
                        Support
                      </NavLink>
                    </SheetClose>
                  </li>
                </ul>
                <ul className="mt-6 flex flex-col items-start text-theme-DarkBlue">
                  <li className="w-full">
                    <SheetClose asChild>
                      <NavLink
                        className="flex w-full items-center gap-2 p-2"
                        aria-current="page"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </SheetClose>
                  </li>
                  <li className="w-full">
                    <SheetClose asChild>
                      <NavLink
                        className="flex w-full items-center gap-2 p-2"
                        aria-current="page"
                        to="/register"
                      >
                        Register
                      </NavLink>
                    </SheetClose>
                  </li>
                </ul>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
