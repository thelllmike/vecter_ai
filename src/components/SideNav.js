import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Sidenav.css";
import { useMediaQuery } from "../Hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";

const SideNav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <p>Content</p>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SideNav;
