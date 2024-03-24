import React from "react";
import { useSelector } from "react-redux";

const PageTitle = ({ title }) => {
  const selector = useSelector((store) => store.theme.darkMode);

  return (
    <div className="inline-block mb-20">
      <div className="text-[28px] font-bold">{title}</div>
      <div
        className={`w-56 h-[3px] px-10 rounded-lg bg-gradient-to-r ${
          selector
            ? "from-gray-900 via-cyan-500 to-gray-900"
            : "from-slate-200 via-cyan-500 to-slate-200"
        }`}
      ></div>
    </div>
  );
};

export default PageTitle;
