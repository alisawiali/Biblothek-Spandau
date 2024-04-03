import React from "react";
// Import img aus  assets
import img from "../assets/bibliothek-3.jpeg";
import { Footer, Navbar } from "../compoents/UL";
//  Import icons aus dem react icons
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2x1 font-bold text-black md:text-3x1">
            10 Uses of artifcial intelliganze in Day to Day Life
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items.center justify-between mt-2 md:mt-4 text-gray-400">
          <p>@snehasishdev</p>
          <div className="flex space-x-2">
            <p>16/03/2024</p>
            <p>23:41</p>
          </div>
        </div>
        <img src={img} className="w-full mx-auto mt-8 rounded-2xl" alt="" />
        <p className="mx-auto mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          aliquid beatae eos sed unde architecto fugit saepe est, similique ipsa
          tempora omnis, labore id numquam quidem pariatur in quae odit. Eos
          blanditiis dolorum id distinctio, quod animi? Iure voluptatum dicta
          at, provident dolorem velit natus sint aspernatur, quisquam iusto
          recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Amet sapiente porro minima molestiae quidem officia eligendi sunt ab
          doloremque alias, ipsa placeat itaque, ea nam corrupti. Libero, error
          consequuntur. Eveniet deserunt blanditiis iste, officiis consequuntur
          neque ratione laborum dicta voluptas at perferendis repellat
          cupiditate ullam voluptate, numquam labore corporis accusantium.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories: </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="bg-gray-300 rounded-lg px-3 py-1 ">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1 ">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold ">comments:</h3>
          {/* comment section */}
          <div className="w-full px-2 py-2 bg-gray-200 rounded-lg mt-2 ">
            <div className="flex items-center justify-between ">
              <h3 className="font-bold text-gray-600">@snehasish</h3>
              <div className="flex justify-center items-center  space-x-4">
                <p className="text-gray-500 text-sm">16/03/2024</p>
                <p className="text-gray-500 text-sm">23:41</p>
                <div className="flex justify-center items-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Information!!</p>
          </div>
          {/* comment section */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg mt-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@snehasish</h3>
              <div className="flex justify-center items-center  space-x-4">
                <p className="text-gray-500 text-sm">16/03/2024</p>
                <p className="text-gray-500 text-sm">23:41</p>
                <div className="flex justify-center items-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Information!!</p>
          </div>
        </div>
        {/* write a comment  */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[80%] outline-none px-4 py-2 mt-4 md:mt-0"
          />
          <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0 rounded-lg hover:bg-gray-800 transition-all">
            Add comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
  
export default PostDetails;
