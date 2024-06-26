import React from "react";

const Newslatter = () => {
  return (
    <>
      <div className="w-full py-16 text-white px-4">
        <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:3xl text-2xl font-bold py-2">
              Want tips and tricks to optimize your flow?
            </h1>
            <p>Sign up to our newslatter and stay up to date</p>
          </div>
          <div className="my-4 ">
            <div className="flex flex-col  sm:flex-row items-center justify-center w-full">
              <input
                className="p-3 flex w-full m-2 rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00df9a] w-[200px] rounded-md text-black font-medium my-6 mx-auto py-3">
                Notify me
              </button>
            </div>
            <p>
              We care about the protection of your data .
              <span className="text-[#00df9a]">Read our Privicy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newslatter;
