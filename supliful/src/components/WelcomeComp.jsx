import React from "react";

function WelcomeComp() {
  return (
    <div className="px-5 lg:px-96 pt-10">
      <div className="md:flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl lg:text-5xl  ">
            Welcome to <span className="font-bold"> Supliful! </span>{" "}
          </h1>
          <p className="pt-5 font-normal text-gray-600 text-base">
            Pick a product you want to customize
          </p>
        </div>
        <div className="">
          <input
            className="p-5 h-10 w-full mt-5 rounded-full border text-lg shadow-xl"
            placeholder="search"
            type="text"
          />
        </div>
      </div>
      <br />
      <div className="hidden md:block">
        <img src="https://supliful.s3.amazonaws.com/banners/catalog/20240722102507-cb-large-supliful-academy-v1--1-.jpg" alt="" />
      </div>
      <div className="md:hidden">
        <img src="https://supliful.s3.amazonaws.com/banners/catalog/20240722102517-mobile--1-.jpg" alt="" />
      </div>
    </div>
  );
}

export default WelcomeComp;
