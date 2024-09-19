import React from "react";
import Nav from "./Nav";
import Landing from "./Landing";
import Companys from "./Companys";
import Threesection from "./Threesection";


function Hero() {
  return (
    <div className="">
      <div className="bg-[#fef7da] xl:px-96">
        <Nav />
        <Landing />
      </div>
      <div className="">
        <Companys />
      </div>
      <div>
        <Threesection/>
      </div>
    </div>
  );
}

export default Hero;
