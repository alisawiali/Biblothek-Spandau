import React from "react";


import { IF } from "../../url";

//
const ProfilePost = ({ prof }) => {
  return (
    <>
      <div className="w-[800px] mx-auto space-x-2 md:flex-row mt-2  space-y-4 md:space-y-0 md:space-x-2">
        {/* left */}
        <div className="flex md:w-1/3 h-[200px] justify-center items-center">
          <img src={IF + prof.photo} alt="" className="h-full w-full" />
        </div>
        {/* right */}
        <div className="flex flex-col md:w-2/3 ">
          <h1 className="text-xl mt-8 font-bold md:mb-2 mb-1 mb:text-2x1 ">
            {prof.title}
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between mb:mb-4">
            <p>@{prof.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(prof.updatedAt).toString().slice(3, 10)}</p>
              <p> {new Date(prof.updatedAt).toString().slice(10, 25)}</p>
            </div>
          </div>
          <p className="text-sm  my-4">{prof.desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProfilePost;
