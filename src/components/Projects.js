import React, { useState } from "react";
import { PROJECT_DETAILS } from "../utils/constants";
import ProjectCard from "./ProjectCard";
import PageTitle from "./PageTitle";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(
      activeIndex < PROJECT_DETAILS.length - 1 ? activeIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setActiveIndex(
      activeIndex > 0 ? activeIndex - 1 : PROJECT_DETAILS.length - 1
    );
  };
  return (
    <div className="absolute top-32 left-0 right-0 text-center">
      <PageTitle title={"Projects"} />
      <div className="flex justify-center mt-0 lg:mt-10 lg:mx-48">
        <div
          className="text-[50px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hidden lg:block"
          onClick={handlePrevious}
        >
          &lt;
        </div>
        <div className=" w-full px-4 lg:px-10">
          {PROJECT_DETAILS.map((el, i) => (
            <ProjectCard
              key={el.name}
              projectDetails={el}
              display={i === activeIndex ? "lg:block" : "lg:hidden"}
            />
          ))}
        </div>
        <div
          className="text-[50px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hidden lg:block"
          onClick={handleNext}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Projects;
