import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="max-w-[500px] mx-auto my-4 " src={laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Managing data analytics centrally refers to the practice of
              centralizing data analytics processes, tools, and resources within
              an organization. This approach enables better coordination,
              standardization, and control over data analytics activities across
              different teams and departments. Here are some key steps and
              considerations for managing data analytics centrally:
            </p>
            <button className="bg-[#000000] w-[200px] rounded-md text-[#00df9a] font-medium my-6 mx-auto md:m-0 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
