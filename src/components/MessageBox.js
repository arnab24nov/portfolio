import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";

const MessageBox = () => {
  const selector = useSelector((store) => store.theme.darkMode);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`max-w-md mx-auto shadow-md rounded px-8 py-6 ${
        selector ? "bg-gray-700" : "bg-white "
      }`}
      onSubmit={handleSubmit}
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="name"
        value={formData.name}
        placeholder="Your Name"
        onChange={handleFormDataChange}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="email"
        value={formData.email}
        placeholder="Your Email-id"
        onChange={handleFormDataChange}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="subject"
        value={formData.subject}
        placeholder="Subject"
        onChange={handleFormDataChange}
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 resize-none"
        placeholder="Message"
        name="message"
        value={formData.message}
        rows={4}
        onChange={handleFormDataChange}
      ></textarea>
      <button className="text-[20px] font-semibold mx-auto flex items-center px-2 py-1 rounded-lg border-2 border-transparent hover:border-cyan-500 bg-cyan-500 hover:bg-transparent text-white hover:text-cyan-500">
        Send <IoIosSend size="20px" className="ml-2" />
      </button>
    </form>
  );
};

export default MessageBox;
