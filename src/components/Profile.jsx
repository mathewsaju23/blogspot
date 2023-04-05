import React from "react";
import dp from "../assets/dp.png";
const Profile = () => {
  return (
    <div className=" w-full bg-white py-16  px-4">
      Profile
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[300px] mx-auto my-4" src={dp} alt="/" />
        <div>
          <p className="flex flex-col justify-center pl-40 text-[#1048b1] font-bold">
            Welcome to Dashboard
          </p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            BIO
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium option
          </p>
          <button className="bg-[#000000] w-[150px] rounded-md font-medium my-6 mx-auto py-2 text-[#1048b1]">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
