import axios from "axios";
import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../../url";
import { UserHookContext } from "../../context/userContext";

const Comment = ({ item, post }) => {
  const { user } = useContext(UserHookContext);

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`${URL}/api/comments/${id}`, {
        withCredentials: true,
      });
      window.location.reload(); // Reload the page after deleting a comment
    } catch (error) {
      console.log(error);
    }
  };
  console.log(post.userId);
  console.log(user._id);
  console.log(post);
  console.log(user);
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg mt-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{item.author}</h3>
        <div className="flex justify-center items-center  space-x-4">
          <p className="text-gray-500 text-sm">
            {new Date(item.updatedAt).toString().slice(3, 10)}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(item.updatedAt).toString().slice(10, 25)}
          </p>
          {user?._id === item?.userId ? (
            <div className="flex justify-center items-center space-x-2">
              <p onClick={() => handleDeleteComment(item._id)}>
                <MdDelete className="cursor-pointer " />
              </p>
            </div>
          ) : (
            <div className="text-xs ">darf nicht löschen</div>
          )}
        </div>
      </div>
      <p className="px-4 mt-2">{item.comment}</p>
    </div>
  );
};

export default Comment;
