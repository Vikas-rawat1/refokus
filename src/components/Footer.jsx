import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg py-10 flex mx-auto gap-10">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h1 className="mb-10 text-zinc-500 uppercase">Socials</h1>
            {["Socials", "Twitter", "(x?)", "Linkedin"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 uppercase">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h1 className="mb-10 text-zinc-500 uppercase">Socials</h1>
            {["Socials", "Twitter", "(x?)", "Linkedin"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 uppercase">{item}</a>
            ))}
          </div>
          <div className="basis-2/3 flex flex-col items-end">
            <p className="text-right ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, maiores!
            </p>
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              className="w-32 mt-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
