import React from "react";
import Button from "./Button";

function Product({ valdata,mover,index,count }) {
  return (
    <div className="w-full h-[23rem] py-20 text-white ">
      <div onMouseEnter={()=>mover(count)} className=" ml-10 mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{valdata.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{valdata.description}</p>
          <div className="flex items-center gap-5">
            {valdata.live && <Button />}
            {valdata.case && <Button title="Case Study" />}
          </div>
          {/* <Button title="helo" /> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
