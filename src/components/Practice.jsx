import { useScroll } from "framer-motion";
import React, { useState } from "react";

function Practice() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((items, index) =>
          arr.indexOf(index) === -1
            ? { ...items, isActive: false }
            : { ...items, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 10:
        // console.log("first")
        imagesShow([]);
        break;
      case 12:
        imagesShow([0]);
        break;
      case 13:
        imagesShow([0, 1]);
        break;
      case 14:
        imagesShow([0, 1, 2]);
        break;
      case 15:
        imagesShow([0, 1, 2, 3]);
        break;
      case 16:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 17:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <>
      <div className="h-screen w-full">
        <div className="relative w-full mx-auto">
          <h1 className="text-[25vw] text-center font-bold">Practice</h1>
          <div className=" absolute w-full h-full top-0 ">
            {images.map(
              (item) =>
                item.isActive && (
                  <img
                    src={item.url}
                    alt=""
                    style={{ top: item.top, left: item.left }}
                    className=" absolute w-60 -translate-x-[50%] -translate-y-[50%]"
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;
