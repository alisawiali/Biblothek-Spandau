import React, { useEffect, useState } from "react";
import { Footer, HomePosts, Navbar } from "../compoents/UL";

import { URL } from "../url";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { search } = useLocation();
  console.log(search);
  const [post, setPost] = useState([]);

  // console.log(search);
  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts${search}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[100px] py-4 min-h[80vh]">
        {post?.map((post) => (
          <HomePosts key={post._id} post={post} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
