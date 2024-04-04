import React from "react";
import { Footer, Navbar } from "../compoents/UL";

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mb-8">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Create a Post</h1>
        <form className="flex flex-col px-4 py-2 outline-none">
          <input
            type="text"
            placeholder="Enter a title"
            className="px-4 py-2 outline-none"
          />
          <input type="file" className="px-4" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
