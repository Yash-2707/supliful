import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="py-5 px-4 flex items-center justify-between ">
      <div className="">
        <img
          src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/657acbf9d9659023d1a9b531_Supliful_Logo.svg"
          alt="logo"
          className="h-8"
        />
      </div>

      <div className="hidden sm:text-xl lg:block xl:text-base">
        <a className="px-4" href="">
          <Link to={"/howitworks"}>
          How it works
          </Link> 
        </a>
        <a className="px-4" href="">
          Catalog
        </a>
        <a className="px-4" href="">
          Services
        </a>
        <a className="px-4" href="">
          Plans
        </a>
        <a className="px-4" href="">
          FAQ
        </a>
      </div>

      <div className="hidden sm:block">
        <button className="border rounded-full w-24 h-9 border-black mr-5">
          Log in
        </button>
        <button className="border rounded-full w-24 h-9 bg-black text-white mr-5">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Nav;