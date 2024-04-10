import React, { useEffect, useState } from "react";
import { Footer, HomePosts, Navbar } from "../compoents/UL";

import { URL } from "../url";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { search } = useLocation();
  const [post, setPost] = useState([]);
  //
  const [noResult, setNoResult] = useState(false);

  // console.log(search);
  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts${search}`);
      setPost(res.data);
      //  wenn suche nicht stattfindet ist dann false legen sonst true
      if (res.data.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
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
      <div className="px-8 md:px-[100px] py-4 min-h-[70vh]">
        {!noResult ? (
          post?.map((post) => <HomePosts key={post._id} post={post} />)
        ) : (
          <h3 className="text-center text-red-500 font-bold mt-16">
            No Posts available
          </h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
