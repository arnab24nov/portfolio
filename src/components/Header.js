import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 h-20 w-screen fixed shadow-lg">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
