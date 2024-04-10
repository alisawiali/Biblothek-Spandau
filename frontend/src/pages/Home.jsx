import React, { useEffect, useState } from "react";
import { Footer, HomePosts, Navbar } from "../compoents/UL";

import { URL } from "../url";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);
  const path = useLocation();
  console.log(path);
  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[100px] py-4">
        {post?.map((post) => (
          <HomePosts key={post._id} post={post} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
