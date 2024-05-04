import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Sidenav.css";
import { useMediaQuery } from "../Hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "./ui/drawer";
import { ScrollArea } from "./ui/scroll-area";

const SideNav = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  return isDesktop ? (
    <div className="sidenav flex flex-col items-start gap-6 p-4 pr-0">
      <h3 className=" text-lg font-semibold">OVERVIEW</h3>
      <ul className=" flex w-full flex-col items-start">
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/start">
            Quick Start
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/pricing">
            Pricing
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/authentication">
            Authentication & Security
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/rate-limit">
            Rate Limiting
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/timeouts">
            Timeouts
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/error-json">
            Error JSON
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/vectorize">
            Vectorize
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/account-status">
            Account Status
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/changelog">
            Changelog
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/output-options">
            Output Options
          </NavLink>
        </li>
        <li className="w-full text-left">
          <NavLink className="block w-full p-4" to="/apidoc/error-responses">
            Error Responses
          </NavLink>
        </li>
      </ul>
    </div>
  ) : (
    <div>
      <Drawer direction="left">
        <DrawerTrigger>
          <i class="fa-solid fa-arrow-right-from-bracket fa-xl text-theme-DarkBlue"></i>
          <p className=" mt-1 text-xs text-theme-DarkBlue">Overview</p>
        </DrawerTrigger>
        <DrawerContent className=" rounded-none">
          <ScrollArea className="h-full">
            <div className="sidenavMob flex flex-col items-start gap-6 p-4 pr-0">
              <h3 className=" text-lg font-semibold">OVERVIEW</h3>
              <ul className=" flex w-full flex-col items-start">
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink className="block w-full p-4" to="/apidoc/start">
                      Quick Start
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink className="block w-full p-4" to="/apidoc/pricing">
                      Pricing
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/authentication"
                    >
                      Authentication & Security
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/rate-limit"
                    >
                      Rate Limiting
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink className="block w-full p-4" to="/apidoc/timeouts">
                      Timeouts
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/error-json"
                    >
                      Error JSON
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/vectorize"
                    >
                      Vectorize
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/account-status"
                    >
                      Account Status
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/changelog"
                    >
                      Changelog
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/output-options"
                    >
                      Output Options
                    </NavLink>
                  </DrawerClose>
                </li>
                <li className="w-full text-left">
                  <DrawerClose asChild>
                    <NavLink
                      className="block w-full p-4"
                      to="/apidoc/error-responses"
                    >
                      Error Responses
                    </NavLink>
                  </DrawerClose>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SideNav;
