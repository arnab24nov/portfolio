import React from "react";
import { useSelector } from "react-redux";

const SkillProgressBar = ({ name, level }) => {
  const selector = useSelector((store) => store.theme.darkMode);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div className=" text-[20px]">{name}</div>
        <div className="">{level}%</div>
      </div>
      <div
        className={`w-full h-2 rounded-full mt-2 ${
          selector ? " bg-white" : "bg-gray-400"
        }`}
      >
        <div
          className="h-full bg-blue-500 rounded-full animate-progress"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
