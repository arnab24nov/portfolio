import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarMobile from "./NavbarMobile";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuStat } from "../utils/mobileMenuSlice";

const Navbar = () => {
  const param = useLocation();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  return (
    <>
      <div className="text-[20px] hidden lg:flex">
        <ToggleTheme />
        <ul className="flex justify-around items-center ml-4">
          <li
            className={`px-4 border-b-2 hover:border-blue-500 rounded-md ${
              param.pathname === "/" ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`px-4 border-b-2 hover:border-blue-500 rounded-md ${
              param.pathname === "/about"
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <Link to={"/about"}>About</Link>
          </li>
          <li
            className={`px-4 border-b-2 hover:border-blue-500 rounded-md ${
              param.pathname === "/skill"
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <Link to={"/skill"}>Skills</Link>
          </li>
          <li
            className={`px-4 border-b-2 hover:border-blue-500 rounded-md ${
              param.pathname === "/project"
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <Link to={"/project"}>Projects</Link>
          </li>
          <li
            className={`px-4 border-b-2 hover:border-blue-500 rounded-md ${
              param.pathname === "/contact"
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <Link to={"/contact"}> Contact</Link>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu
        size="30px"
        className="ml-8 lg:hidden"
        onClick={() => {
          dispatch(toggleMenuStat());
        }}
      />
      {isMenuOpen && <NavbarMobile className="z-50" />}
    </>
  );
};

export default Navbar;
