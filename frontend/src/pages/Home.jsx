import React, { useContext, useEffect, useState } from "react";
import { Footer, HomePosts, Loader, Navbar } from "../compoents/UL";

import { URL } from "../url";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import { UserHookContext } from "../context/userContext";

const Home = () => {
  const { search } = useLocation();
  const [post, setPost] = useState([]);
  // für suchmaschene
  const [noResult, setNoResult] = useState(false);
  const [loader, setLoader] = useState(false);
  //
  const { user } = useContext(UserHookContext);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/posts${search}`);
      setPost(res.data);
      //  Überprüfe stellen
      if (res.data.length === 0) {
        // Wenn keine Ergebnisse gefunden wurden,
        setNoResult(true);
      } else {
        setNoResult(false);
      }
      setLoader(false);
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
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResult ? (
          post?.map((post) => (
            <div key={post._id}>
              <NavLink to={user ? `/posts/post/${post._id}` : "/login"}>
                <HomePosts key={post._id} post={post} />
              </NavLink>
            </div>
          ))
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
