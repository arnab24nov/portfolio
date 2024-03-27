import React from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const param = useLocation();

  return (
    <div className="flex text-[20px]">
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
  );
};

export default Navbar;
