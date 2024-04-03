import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-900 text-white mt-8 px-2 md:px-[200px] flex md:flex-row flex-col text-center space-y-4 md:space-y-0  md:justify-between text-sm md:text-md py-8 md:mt-8">
        <div className="flex flex-col text-white">
          <p>Bibliothek</p>
          <p>Meist gelesen</p>
          <p>Empfohlene Blogs</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Suport </p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy</p>
          <p>About Us </p>
          <p>Terms Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <p className="text-center bg-gray-900 text-white pb-4  py-4 text-sm">
        All rights reserved &copy; Bibliothek Markt 2024
      </p>
    </>
  );
};

export default Footer;
