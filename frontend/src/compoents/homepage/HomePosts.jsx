import React from "react";
import imgBook from "../../assets/books.png";
import { NavLink } from "react-router-dom";
import { IF } from "../../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex mt-12 space-x-2 flex-col md:flex-row myt-8  space-y-4 md:space-y-0 md:space-x-2">
      {/* left */}
      <div className="flex md:w-1/3 h-[200px] justify-center items-center">
        <img
          src={IF + post.photo}
          alt=""
          className="h-full w-full rounded-lg "
        />
      </div>
      {/* right */}
      <div className="flex flex-col md:w-2/3 ">
        <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2x1 ">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between mb:mb-4">
          <p>{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(3, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(15, 15)}</p>
          </div>
        </div>
        {/*  slice um den text */}
        <div className="">
          <p className="text-sm  p-4">
            {post.desc.slice(0, 250)}
            <NavLink className="text-blue-500 text-xs cursor-pointer">
              ...Read more"
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
