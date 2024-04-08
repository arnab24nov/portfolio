import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
import { motion } from "framer-motion";

const ToggleThemeMobile = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.theme.darkMode);

  const handleToggle = (e) => {
    e.stopPropagation();
    dispatch(toggleTheme());
  };

  return (
    <motion.div
      className="ml-8 mt-8 inline-block transition-all ease-in-out duration-500"
      onClick={handleToggle}
    >
      {selector ? (
        <motion.div animate={{ rotate: 90 }} transition={{ duration: 0.5 }}>
          <FaSun size="25px" className="text-white" />
        </motion.div>
      ) : (
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 0.5, stiffness: 120 }}
        >
          <BsFillMoonFill size="25px" className="text-black" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ToggleThemeMobile;
