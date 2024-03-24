import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <span className="text-[50px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        &lt;
      </span>

      <div className="text-[40px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Portfolio
      </div>
      <span className="text-[50px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        &gt;
      </span>
    </div>
  );
};

export default Logo;
