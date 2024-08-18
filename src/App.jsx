import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";
import Practice from "./components/Practice";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="bg-black w-full h-full font-[Satohi variable] text-white">
        <Navbar />
        <Work />
        <Stripes />
        {/* <Practice/> */}
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
