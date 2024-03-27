import React from "react";
import { useLocation } from "react-router-dom";

const NoMatchRoute = () => {
  const location = useLocation();
  return (
    <div className="absolute top-32 left-0 right-0 text-center">
      <div className="text-[60px]">404</div>
      <div>
        There is no doc found for{" "}
        <span className=" opacity-60">{location.pathname}</span>
      </div>
    </div>
  );
};

export default NoMatchRoute;
