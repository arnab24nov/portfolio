import React from "react";
import ContactDetails from "./ContactDetails";
import MessageBox from "./MessageBox";
import PageTitle from "./PageTitle";
import { useSelector } from "react-redux";

const Contact = () => {
  const selector = useSelector((store) => store.theme.darkMode);
  return (
    <div className="absolute top-32 left-0 right-0 text-center mx-20">
      <PageTitle title={"Contacts"} />
      <div className="flex justify-around items-center w-full mx-auto">
        <ContactDetails />
        <div
          className={`h-80 w-1 mx-10 rounded-lg bg-gradient-to-b ${
            selector
              ? "from-gray-900 via-cyan-500 to-gray-900"
              : "from-slate-200 via-cyan-500 to-slate-200"
          }`}
        ></div>
        <MessageBox />
      </div>
    </div>
  );
};

export default Contact;
