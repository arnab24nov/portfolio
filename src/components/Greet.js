import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ROLE } from "../utils/constants";
import { Link } from "react-router-dom";
import ideScreenImage from "../assets/ide_screen.png";

const Greet = () => {
  const [role, setRole] = useState("");
  const [curIndex, setCurIndex] = useState(0);
  const [curRole, setCurRole] = useState(ROLE[0]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (curIndex < ROLE.length) {
      setCurRole(ROLE[curIndex]);
    } else {
      setCurIndex(0);
    }
  }, [curIndex]);

  useEffect(() => {
    let index = 0;
    let backSpace;
    const timer = setInterval(() => {
      if (index < curRole.length) {
        let str = curRole[index];
        setRole((prevRole) => prevRole + str);
        index++;
      } else {
        clearInterval(timer);
        backSpace = setInterval(() => {
          if (index === 0) {
            clearInterval(backSpace);
            setCurIndex((prevCurIndex) => prevCurIndex + 1);
          } else {
            setRole((prevRole) => prevRole.slice(0, prevRole.length - 1));
            index--;
          }
        }, 200);
      }
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(backSpace);
    };
  }, [curRole]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    return () => clearInterval(cursorTimer);
  }, []);

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1mTxVHsrSMRaIjKlv3yUShw0Lcii4Kgz9/view?usp=sharing";

    const a = document.createElement("a");
    a.href = fileUrl;
    a.target = "_blank";
    a.download = "Arnab_Khanrah_resume.pdf";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  return (
    <div className="absolute top-60 left-40 flex justify-between items-center w-[80%] ">
      <div className="mr-20 w-[60%]">
        <div className="text-[20px]">Hi, there! 👋</div>
        <div>
          I'm
          <span className="text-[40px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text pl-2">
            Arnab Khanrah
          </span>
        </div>
        <div className="text-[24px] font-semibold">
          And I'm a{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text">
            {role}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="text-[20px] ml-10 mt-4 font-semibold flex items-center px-2 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
            onClick={handleDownload}
          >
            <FaCloudDownloadAlt size="25px" className="mr-2" /> Resume
          </button>
          <button className="text-[20px] ml-10 mt-4 font-semibold flex items-center px-2 py-1 rounded-lg bg-transparent border-2 border-cyan-500  text-cyan-500">
            <Link to={"/contact"}>Contact Me</Link>
          </button>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="w-[350px] h-[350px] relative">
          <img
            className="w-80 h-80 rounded-full animation-image outer-shadow"
            src={ideScreenImage}
            alt="avator"
          />
        </div>
      </div>
    </div>
  );
};

export default Greet;
