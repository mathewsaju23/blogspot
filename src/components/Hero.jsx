import React from "react";

import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white max-w-[800] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-[#1048b1] font-bold p2">Welcome to BLOGSPOT</p>
      <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
        LETS START BLOGGING
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-7xl sm:text-6xl text-4xl font-bold ">Always</p>
        <Typed
          className="md:text-7xl sm:text-6xl
         text-4xl font-bold pl-2"
          strings={["Fast,Secure,Reliable"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>

      <div>
        <p className="pt-5 md:text-4xl text-3xl text-gray-600 font-bold">
          NEW SPOTS AVAILABLE !!!!!!!!!!!
        </p>
        <button className="bg-[#1048b1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;
