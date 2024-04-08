import React from "react";
import { CONTACT_DETAILS } from "../utils/constants";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const ContactDetails = () => {
  return (
    <div className="px-10 text-[16px] text-left">
      <div className="flex items-center mb-4">
        <LuPhone size="20px" className="mr-5 lg:mr-10 min-h-5 min-w-5" />
        {CONTACT_DETAILS.phone}
      </div>
      <div className="mb-4">
        <a
          className="flex items-center"
          href={`mailto:${CONTACT_DETAILS.email}`}
        >
          <AiOutlineMail
            size="20px"
            className="mr-5 lg:mr-10 min-h-5 min-w-5"
          />
          <div className="hover:text-cyan-500 hover:scale-105">
            {CONTACT_DETAILS.email}
          </div>
        </a>
      </div>
      <div className="mb-4">
        <a
          className="flex items-center"
          href={CONTACT_DETAILS.ldn}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin size="20px" className="mr-5 lg:mr-10 min-h-5 min-w-5" />
          <div className="hover:text-cyan-500 hover:scale-105">
            {CONTACT_DETAILS.ldn}
          </div>
        </a>
      </div>
      <div className="mb-4">
        <a
          className="flex items-center"
          href={CONTACT_DETAILS.ghub}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size="20px" className="mr-5 lg:mr-10 min-h-5 min-w-5" />
          <div className="hover:text-cyan-500 hover:scale-105">
            {CONTACT_DETAILS.ghub}
          </div>
        </a>
      </div>
      <div className="flex items-center mb-4">
        <GrLocation size="20px" className="mr-5 lg:mr-10 min-h-5 min-w-5" />
        {CONTACT_DETAILS.addr}
      </div>
    </div>
  );
};

export default ContactDetails;
