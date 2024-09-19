import React from "react";

function Threesection() {
  return (
    <div className="min-h-screen">
      <br />
      <br />
      <br />
      <br />
      <div className="own-grown flex flex-col lg:flex-row justify-center items-center">
        <div>
          <img
            className="h-auto lg:h-[400px] m-4 w-[90%] lg:w-auto"
            src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/61efeb76ece6d8dd877584b4_2.png"
            alt=""
          />
        </div>
        <div className="p-8 pt-10 lg:pt-24 w-[90%] lg:w-[350px]">
          <h1 className="font-medium text-2xl lg:text-4xl text-center lg:text-left">
            Own and grow your brand
          </h1>
          <br />
          <div className="flex items-center justify-center lg:justify-start">
            <img
              className="h-10"
              src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/61e554e2bdf52d1678b67546_Untitled%20design%20(8).png"
              alt=""
            />
            <h1 className="font-medium text-lg ml-2">Brand owners</h1>
          </div>
          <br />
          <h6 className="text-center lg:text-left">
            Monetize your personal brand and build a self-sustaining business
            selling personalized products.
          </h6>
          <br />
          <br />
          <button className="border-b-[1px] pb-2 border-black">
            Start today
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="p-8 pt-10 lg:pt-24 w-[90%] lg:w-[350px] text-center lg:text-left">
          <h1 className="font-medium text-2xl lg:text-4xl">
            Offer the products your customers will love
          </h1>
          <br />
          <br />
          <h6 className="font-medium">
            Pick from 100+ products that are certified, trusted, and truly
            unique.
          </h6>
          <br />
          <br />
          <button className="rounded-full bg-[#2aae74] text-white px-6 lg:px-9 py-2 lg:py-3 font-bold shadow-2xl shadow-[#2aae74]">
            Explore products
          </button>
        </div>
        <div className="bg-[#2aae74] rounded-t-full flex items-center justify-center m-4 lg:m-11 w-[90%] lg:w-auto">
          <img
            className="h-auto lg:h-[300px] w-[90%] lg:w-auto"
            src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/61da9750c3c2630061ed5a94__Pink%20Geometric%20Online%20Classes%20Facebook%20Post%20(9)-p-500.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="own-grown flex flex-col lg:flex-row justify-center items-center ">
        <div>
          <iframe
            className="h-auto lg:h-[400px] m-4 w-[90%] lg:w-auto"
            src="https://streamable.com/e/p4l1fu?autoplay=1&loop=1&nocontrols=1"
            width="560"
            height="315"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        {/* Content Section */}
        <div className="lg:w-72 lg:ml-4 text-center lg:text-left">
          <h1 className="font-medium text-2xl lg:text-4xl">
            Focus on you, let us take care of the logistics
          </h1>
          <div className="flex justify-center lg:justify-start items-center mt-4">
            <h1 className="font-bold text-lg ml-2">sell on</h1>
            <img
              className="h-7 mx-2"
              src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/61e951e301b056060061595f_Shopify_logo_2018.svg"
              alt=""
            />
            <img
              className="h-7 mx-2"
              src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/626a630e3107cb89a304633a_TikTok_Icon_Black.svg"
              alt=""
            />
            <img
              className="h-7 mx-2"
              src="https://cdn.prod.website-files.com/61c08478b7424c3d52641157/626a632999cefc551fafd35d_Instagram_logo_2016.svg"
              alt=""
            />
          </div>
          <h6 className="mt-4">
            Supliful silently takes care of the product, packaging, and shipping
            for you. No upfront fees.
          </h6>
          <button className="font-medium border-b-[1px] pb-2 border-black hover:text-gray-700 mt-4">
            How it works
          </button>
        </div>
      </div>
    </div>
  );
}

export default Threesection;
