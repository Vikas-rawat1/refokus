import { motion } from "framer-motion";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

function Card({ width, start, para ,hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor:hover==="true"&&"#7443ff",padding:"25px"}} className={`${width} hover:${hover} bg-zinc-800 p-5 rounded-xl min-h-[20rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>one heading </h3>
          <IoArrowForwardSharp />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever</h1>
      </div>
      <div className="down w-full mt-40">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm  text-zinc-500 font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
