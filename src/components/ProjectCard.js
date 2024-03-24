import React from "react";

const ProjectCard = ({ projectDetails, display }) => {
  return (
    <div className={"flex justify-between " + display}>
      <div className="w-[20%] px-4 flex flex-col items-center">
        <div className="text-[20px]">{projectDetails.name}</div>
        {projectDetails.link !== "" && (
          <a
            href={projectDetails.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-[20px] mt-4 font-semibold flex items-center px-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer text-white">
              Link
            </button>
          </a>
        )}
      </div>
      <div className="w-[80%] text-start px-10">
        <div className="mb-3 text-[20px] flex">
          <div>Description: </div>
          <div className="text-[18px] ml-2 first-letter:ml-6">
            {projectDetails.desc}
          </div>
        </div>
        <div>
          <span className="text-[20px]">Technology used: </span>
          {projectDetails.tech}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
