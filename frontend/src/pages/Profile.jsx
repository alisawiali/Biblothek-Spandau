import React from "react";
import { Footer, Navbar, ProfilePost } from "../compoents/UL";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:[200px] mt-12 flex flex-col-reverse md:flex-row  md:items-start">
        {/* left */}
        <div className="flex flex-col md:w-[70%] w-full items-center mt-8">
          <h1 className="text-xl font-bold mb-4 ">Your posts</h1>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
        {/* right */}
        <div className="md:sticky md:top-16  md:w-[30%] w-full ">
          <div className="flex flex-col space-y-4 items-center bg-gray-100  ml-4 p-2 rounded-sm">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              className="outline-none  px-4 py-2 text-gray-500"
              placeholder="Your username"
            />
            <input
              type="email"
              className="outline-none  px-4 py-2 text-gray-500"
              placeholder="Your email"
            />
            <input
              type="password"
              className="outline-none  px-4 py-2 text-gray-500"
              placeholder="Your password"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-white hover:bg-gray-700 ease-in duration-300 rounded hover:rounded-lg">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-white hover:bg-gray-700 ease-in duration-300 rounded hover:rounded-lg">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
