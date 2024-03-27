import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.theme.darkMode);

  return (
    <div className="inline-block relative bg-cyan-500  rounded-xl w-13 h-6 px-1">
      <button className="" onClick={() => dispatch(toggleTheme())}>
        <div className="flex justify-between items center bg-transparent w-12 h-6">
          <BsFillMoonFill size="18px" style={{ color: "#000" }} />
          <FaSun size="18px" style={{ color: "#fdffba" }} />
        </div>
        <div
          className={`w-6 h-6 rounded-3xl absolute top-0 transition-all duration-300 ease-in-out flex justify-center items-center bg-white ${
            selector ? "right-0" : "left-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleTheme;
