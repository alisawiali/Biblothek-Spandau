import React from "react";
import { Footer, HomePosts, Navbar } from "../compoents/UL";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[100px] py-4">
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
