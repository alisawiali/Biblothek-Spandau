import React, { useContext, useEffect, useState } from "react";
import { Footer, HomePosts, Loader, Navbar } from "../UL";
import { useLocation, NavLink } from "react-router-dom";
import { UserHookContext } from "../../context/userContext";
import axios from "axios";
import { URL } from "../../url";
//
const MyBlogs = () => {
  const { search } = useLocation();
  const [post, setPost] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [loader, setLoader] = useState(false);
  // useContext Hooks
  const { user } = useContext(UserHookContext);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/posts/user/${user._id}`);
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

  //
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-200 bg-gray-200 pt-8 mt-12 min-h-[70vh] w-[800px] mx-auto rounded-lg">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center ">
            <Loader />
          </div>
        ) : !noResult ? (
          post?.map((post) => (
            <div key={post._id} className="">
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

export default MyBlogs;
