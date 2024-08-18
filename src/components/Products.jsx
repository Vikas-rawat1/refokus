import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
  const products = [
    {
      title: "arqitel",
      description: "how to create a product with React components",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description: "how to create a product with React components",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description: "how to create a product with React components",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description: "how to create a product with React components",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <>
      <div className="mt-32 relative ">
        {products.map((val, index) => (
          <Product mover={mover} count={index} valdata={val} key={index} />
        ))}
        <div className="w-full h-full   absolute top-0  pointer-events-none">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            // yaha pe hame position change karnaa hai and wo move hoga isliye rem diya hai
            animate={{ y: pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute  w-[28rem] h-[23rem]   left-[44%] -translate-x-[50%]  overflow-hidden "
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full  "
            > 
              <video
                src="media/arqitel.webm"
                className="w-full h-full rounded-lg overflow-hidden "
                autoPlay
                loop
                muted
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full rounded-lg bg-blue-900 overflow-hidden"
            >
              <video
                src="media/cula.mp4"
                className="w-full h-full rounded-lg overflow-hidden object-cover "
                autoPlay
                loop
                muted
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full "
            >
              <video
                src="media/yir.webm"
                className="w-full h-full rounded-lg overflow-hidden"
                autoPlay
                loop
                muted
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full"
            >
              <video
                src="media/yahoo.webm"
                className="w-full h-full rounded-lg overflow-hidden"
                autoPlay
                loop
                muted
              ></video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
