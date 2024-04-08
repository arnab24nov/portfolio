import React from "react";
import { useSelector } from "react-redux";

const ProjectCard = ({ projectDetails, display }) => {
  const selector = useSelector((store) => store.theme.darkMode);
  return (
    <div
      className={`mb-10 shadow-md lg:shadow-none rounded-lg p-4 lg:p-0 lg:border-none lg:flex lg:justify-between lg:bg-transparent " 
        ${display} ${selector ? "bg-gray-800" : "bg-slate-300 "}`}
    >
      <div className="lg:w-[20%] lg:px-4 flex flex-col items-center mb-6">
        <div className="text-[30px] lg:text-[20px]">{projectDetails.name}</div>
        {projectDetails.link !== "" && (
          <a
            href={projectDetails.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-[20px] mt-4 font-semibold flex items-center px-2 rounded-lg border-2 border-transparent hover:border-cyan-500 bg-cyan-500 text-white hover:bg-transparent hover:text-cyan-500">
              Link
            </button>
          </a>
        )}
      </div>
      <div className="w-full text-start lg:px-10">
        <div className="mb-3 text-[20px] lg:flex">
          <div className=" text-slate-500">Description: </div>
          <div className="text-[18px] ml-2 first-letter:ml-6 w-full">
            {projectDetails.desc}
          </div>
        </div>
        <div>
          <span className="text-[20px] text-slate-500">Technology used: </span>
          {projectDetails.tech}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
