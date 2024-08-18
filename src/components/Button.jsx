import React from "react";

function Button({title="Get Started"}) {
  return (
    <div className="max-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex justify-center items-center">
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

export default Button;
