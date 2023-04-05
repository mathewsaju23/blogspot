import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-100 w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto  mt-[-3rem] bg-transparent"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-bold py-8 text-center">Single User</h2>
          <p className="text-2xl font-bold py-8 text-center">₹149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">51 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2GB</p>
            <button className="bg-[#1048b1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Start Trial
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto  mt-[-3rem] bg-transparent"
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-bold py-8 text-center">Double User</h2>
          <p className="text-2xl font-bold py-8 text-center">₹249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">51 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2GB</p>
            <button className="bg-[#1048b1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Start Trial
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto  mt-[-3rem] bg-transparent"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold py-8 text-center">Multiple User</h2>
          <p className="text-2xl font-bold py-8 text-center">₹449</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">51 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2GB</p>
            <button className="bg-[#1048b1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
