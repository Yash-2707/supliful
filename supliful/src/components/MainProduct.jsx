import React from "react";

function MainProduct() {
  return (
    <div className="bg-[#f7f7f7] flex flex-wrap w-[30%] mx-4 mt-5 p-5">
      <div>
        <img
          className=""
          src="https://supliful.com/_next/image?url=https%3A%2F%2Fsupliful.s3.amazonaws.com%2Fproducts%2Fimages%2F20240807220405-fll0ncns-10--niacinamide-serum.png&w=768&q=75"
          alt=""
        />
      </div>
      <div>
        <p className="text-sm">Personal Care and Beauty</p>
        <h1 className="text-lg font-semibold">10% Niacinamide Serum</h1>
        <br /><br />
        <table className="w-[150%]">
            <tr>
                <th className="font-light text-left">From</th>
                <th className="text-[#218958] font-light text-left">SRP</th>
                <th className="bg-[#218958] rounded-t-lg text-white font-light text-left">Pofit</th>
            </tr>
            <tr>
                <th className="text-left">$12.10</th>
                <th className="text-[#218958] text-left">$23.99</th>
                <th className="bg-[#218958] text-white w-16 rounded-b-lg text-left">$11.89</th>
            </tr>
        </table>
      </div>
    </div>
  );
}

export default MainProduct;
