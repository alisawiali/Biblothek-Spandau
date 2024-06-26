import React, { useContext, useEffect, useState } from "react";

import { Comment, Footer, Loader, Navbar } from "../compoents/UL";
//  Import icons aus dem react icons
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL, IF } from "../url";
import { UserHookContext } from "../context/userContext";

//
const PostDetails = () => {
  //
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const { user } = useContext(UserHookContext);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  //
  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/posts/${postId}`);
      setPost(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [postId]);

  // delet id Post
  const handelDeletPost = async () => {
    try {
      const res = await axios.delete(`${URL}/api/posts/` + postId, {
        withCredentials: true,
      });
      console.log(res.data);
      navigate("/");
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const fetchPostComment = async () => {
    try {
      const res = await axios.get(`${URL}/api/comments/post/` + postId, {
        withCredentials: true,
      });
      // console.log(res.data);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostComment();
  }, [postId]);
  // comment schreiben

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${URL}/api/comments/create`,
        {
          comment: comment,
          author: user.username,
          postId: postId,
          userId: user._id,
        },
        { withCredentials: true }
      );

      fetchPostComment();
      setComment("");
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //
  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8 ">
          <div className="flex justify-between items-center">
            <h1 className="text-2x1 font-bold text-black md:text-3x1">
              {post.title}
            </h1>
            {user?._id === post?.userId && (
              <div className="flex justify-center items-center space-x-2">
                <p>
                  <BiEdit
                    className="cursor-pointer "
                    onClick={() => navigate("/edit/" + postId)}
                  />
                </p>
                <p>
                  <MdDelete
                    className="cursor-pointer "
                    onClick={handelDeletPost}
                  />
                </p>
              </div>
            )}
          </div>
          <div className="flex items.center justify-between mt-2 md:mt-4 text-gray-400">
            <p>{post.username} </p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(3, 10)}</p>
              <p>{new Date(post.updatedAt).toString().slice(10, 25)}</p>
            </div>
          </div>
          <img
            src={IF + post.photo}
            className="w-full h-[400px] mx-auto mt-8 rounded-lg "
            alt=""
          />
          <p className="mx-auto mt-8">{post.desc}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories: </p>
            <div className="flex justify-center items-center space-x-3">
              <div className="flex items-center rounded-lg px-3 py-1 space-x-2">
                {post.categories?.map((category, id) => (
                  <div key={id} className="bg-gray-300 rounded-lg px-3 py-1">
                    {category}
                  </div>
                ))}
              </div>
              <div className="bg-gray-300 rounded-lg px-3 py-1 ">Ai</div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold ">comments:</h3>
            {/*  (write a comment component)  */}
            {comments?.map((item) => (
              <Comment key={item._id} item={item} post={post} />
            ))}
          </div>
          {/* write a comment  */}
          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              onChange={(e) => setComment(e.target.value)}
              // value={comment}
              type="text"
              placeholder="Write a comment"
              className="md:w-[80%] outline-none px-4 py-2 mt-4 md:mt-0"
            />
            <button
              onClick={postComment}
              className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0 rounded-lg hover:bg-gray-800 transition-all"
            >
              Add comment
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PostDetails;
