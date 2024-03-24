import React from "react";
import { ABOUT_ME } from "../utils/constants";
import PageTitle from "./PageTitle";

const About = () => {
  return (
    <div className=" absolute top-32 left-0 right-0 text-center">
      <PageTitle title={"About"} />
      <div className=" mx-40 mb-20 leading-7">{ABOUT_ME}</div>
      <div className="flex justify-around items-center w-[50%] mx-auto">
        <div>
          <div className="w-20 h-20 border-2 border-cyan-500 rounded-full flex items-center justify-center text-[24px] font-bold mb-3 outer-shadow">
            2+
          </div>
          <div>Experience</div>
        </div>
        <div>
          <div className="w-20 h-20 border-2 border-cyan-500  rounded-full flex items-center justify-center text-[24px] font-bold mb-3 outer-shadow">
            5+
          </div>
          <div>Projects</div>
        </div>
      </div>
    </div>
  );
};

export default About;
