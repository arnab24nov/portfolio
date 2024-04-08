import React from "react";
import SkillProgressBar from "./SkillProgressBar";
import PageTitle from "./PageTitle";

const Skills = () => {
  return (
    <div className="absolute top-32 left-0 right-0 text-center">
      <PageTitle title={"Skills"} />
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className=" w-[80vw] lg:w-[500px]">
          <SkillProgressBar name="HTML" level={70} />
          <SkillProgressBar name="CSS" level={70} />
          <SkillProgressBar name="JavaScript" level={80} />
          <SkillProgressBar name="Bootstrap" level={75} />
        </div>
        <div className="w-[80vw] lg:w-[500px]">
          <SkillProgressBar name="jQuery" level={70} />
          <SkillProgressBar name="ElectronJS" level={75} />
          <SkillProgressBar name="React" level={70} />
          <SkillProgressBar name="Tailwind CSS" level={70} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
