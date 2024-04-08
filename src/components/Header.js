import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-center lg:justify-between items-center h-20 w-screen shadow-lg lg:px-10">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
