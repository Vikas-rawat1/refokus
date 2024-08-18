import React from "react";
import { motion } from "framer-motion";
function Marquee({ imagesUrls, direction }) {
  return (
    <div className="flex w-full py-4 gap-0 whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: "15", repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 pr-40"
      >
        {imagesUrls.map((url, index) => (
          <img
            src={url}
            key={index}
            className="w-[10vw] flex-shrink-0"
            alt=""
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: "15", repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 pr-40"
      >
        {imagesUrls.map((url, index) => (
          <img
            src={url}
            key={index}
            className="w-[10vw] flex-shrink-0"
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
