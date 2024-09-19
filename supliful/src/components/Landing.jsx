import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="p-4 pt-16 pb-36">
        <div className="sm:flex">
          <div className="w-[90%] sm:py-9 xl:w-[50%]">
            <h1 className="text-4xl font-medium leading-snug xl:text-5xl">
              Start your own private label business–without the hassle
            </h1>
            <br />
            <p className="text-[1.8vh]">
              Give your followers a product they'll want to order again and
              again. Risk-free, quick, and simple with on-demand fulfillment, no
              upfront fees and no minimums.
            </p>
            <br />
            <br />
            <Link to="/start">
              <button className="rounded-full bg-[#2aae74] text-white px-9 py-3 font-bold shadow-2xl shadow-[#2aae74]">
                Get started
              </button>
            </Link>
            <br />
            <br />
            <br />
            <div className="flex justify-between sm:w-[90%] xl:w-[70%]">
              <div className="">
                <p className="text-center">Shopify</p>
                <div className="flex ">
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a4c688bb821121379e_star-half.svg"
                    alt=""
                  />
                  <h6 className="font-bold">4.7/5</h6>
                </div>
                <p>based on 900+ reviews</p>
              </div>
              <div className="text-center">
                <p>Trustpilot</p>
                <div className="flex">
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a45e3aa7dd779e0c14_star-full.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/662684a4d33de2e4ebe7e63e_star-empty.svg"
                    alt=""
                  />{" "}
                  <h6 className="font-bold">4.7/5</h6>
                </div>
                <p>based on 215 reviews</p>
              </div>
            </div>
          </div>
          <div className="pt-16 sm:p-6 xl:pt-0 xl:pl-32">
            <img
              className="2"
              src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/61c09282528df413eb9befa9_supliful-hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
