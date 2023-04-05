import React from "react";

const Letter = () => {
  return (
    <div className="px-4 w-full py-16 text-white">
      Letter
      <div className="  max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Want tips & tricks to optimize your blog?
          </h1>
          <p>Sign up with Email to know more and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black "
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#1048b1] w-[200px] rounded-md font-medium ml-4 my-2 mx-auto py-2  text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data.Read our
            <span className="text-[#1048b1]"> privacy policy</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
