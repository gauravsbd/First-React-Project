import React from "react";

const hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-1">
          GROWING WITH DATA ANALYSTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-xl font-bold md:py-6 ">
          GROW WITH DATA.
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-2xl text-xl font-bold">
            Fast, Flexible, Financing for BTB, SASS, BTC
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md text-black font-medium my-6 mx-auto py-3">
          Get started
        </button>
      </div>
    </div>
  );
};

export default hero;
