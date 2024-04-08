import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import ToggleThemeMobile from "./ToggleThemeMobile";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuStat } from "../utils/mobileMenuSlice";

const NavbarMobile = () => {
  console.log("re-rendered...");
  const param = useLocation();
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.theme.darkMode);

  const handleCloseMenu = () => {
    dispatch(toggleMenuStat());
  };

  return (
    <div
      className={`fixed top-4 left-6 h-[90vh] w-[90vw] rounded-lg ${
        selector ? "bg-gray-950" : "bg-slate-300"
      } opacity-90 z-50`}
    >
      <RxCross1
        size="35px"
        className={`${
          selector ? "text-white" : "text-black"
        } absolute top-10 right-5`}
        onClick={handleCloseMenu}
      />
      <ul
        className={`flex flex-col justify-center items-start ml-8 mt-40 ${
          selector ? "text-white" : "text-black"
        } text-[28px] font-semibold`}
      >
        <li
          className={`py-2 border-b-2 ${
            param.pathname === "/"
              ? selector
                ? "border-white"
                : "border-black"
              : "border-transparent"
          }`}
          onClick={handleCloseMenu}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={`py-2 border-b-2 ${
            param.pathname === "/about"
              ? selector
                ? "border-white"
                : "border-black"
              : "border-transparent"
          }`}
          onClick={handleCloseMenu}
        >
          <Link to={"/about"}>About</Link>
        </li>
        <li
          className={`py-2 border-b-2 ${
            param.pathname === "/skill"
              ? selector
                ? "border-white"
                : "border-black"
              : "border-transparent"
          }`}
          onClick={handleCloseMenu}
        >
          <Link to={"/skill"}>Skills</Link>
        </li>
        <li
          className={`py-2 border-b-2 ${
            param.pathname === "/project"
              ? selector
                ? "border-white"
                : "border-black"
              : "border-transparent"
          }`}
          onClick={handleCloseMenu}
        >
          <Link to={"/project"}>Projects</Link>
        </li>
        <li
          className={`py-2 border-b-2 ${
            param.pathname === "/contact"
              ? selector
                ? "border-white"
                : "border-black"
              : "border-transparent"
          }`}
          onClick={handleCloseMenu}
        >
          <Link to={"/contact"}> Contact</Link>
        </li>
      </ul>
      <ToggleThemeMobile />
    </div>
  );
};

export default NavbarMobile;
