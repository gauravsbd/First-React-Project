import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-4 text-white ">
            So, when an element with the class "hover:scale-105" is being
            hovered over, it will undergo a transformation that includes scaling
            up by 1.05 times in both the X and Y axes.
          </p>
          <div className="flex justify-between md:w-[75%] my-6 ">
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-5">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-4 text-sm ">Analystics</li>
              <li className="py-4 text-sm ">Marketing</li>
              <li className="py-4 text-sm ">Commerce</li>
              <li className="py-4 text-sm ">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-4 text-sm ">Pricing</li>
              <li className="py-4 text-sm ">Documentation</li>
              <li className="py-4 text-sm ">Guides</li>
              <li className="py-4 text-sm ">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-4 text-sm ">About</li>
              <li className="py-4 text-sm ">Blog</li>
              <li className="py-4 text-sm ">Jobs</li>
              <li className="py-4 text-sm ">Press</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-4 text-sm ">Claim</li>
              <li className="py-4 text-sm ">Policy</li>
              <li className="py-4 text-sm ">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
