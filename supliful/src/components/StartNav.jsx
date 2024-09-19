import React from "react";

function StartNav() {

  return (
    <div className="px-5 py-6 lg:px-96">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/657acbf9d9659023d1a9b531_Supliful_Logo.svg"
            alt=""
            className="h-8"
          />
          <div className="hidden md:block text-sm lg:text-base">
            <a className="px-3 lg:px-5" href="#services">
              Services
            </a>
            <a className="px-3 lg:px-5" href="#Accelerator">
              Accelerator
            </a>
            <a className="px-3 lg:px-5" href="#FAQ">
              FAQ
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:items-center text-sm lg:text-base">
          <a className="px-3 lg:px-5" href="#Catalog">
            Catalog
          </a>
          <a className="px-3 lg:px-5" href="#Products">
            My products
          </a>
          <a className="px-3 lg:px-5" href="#Stores">
            Stores
          </a>
          <a className="px-3 lg:px-5" href="#Orders">
            Orders
          </a>
          <p className="bg-[#29b672] text-2xl rounded-full p-1">VP</p>
        </div>
      </div>
    </div>
  );
}

export default StartNav;
