import React from "react";
import { Footer, Navbar } from "../compoents/UL";
// Import icons aud dem reat icons
import { ImCross } from "react-icons/im";
const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mb-8 ">
        <h1 className="font-bold md:text-2xl text-xl">Create a Post</h1>
        <form className="flex flex-col px-4 py-2 outline-none mt-4">
          <input
            type="text"
            placeholder="Enter a title"
            className="px-4 py-2 outline-none"
          />
          <input type="file" className="px-4" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter post category "
              />
              <div className="bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-2xl">
                Add
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2 bg-gray-200 px-2 py-1 rounded-md">
              <p>Tach</p>
              <p className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                <ImCross />
              </p>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
