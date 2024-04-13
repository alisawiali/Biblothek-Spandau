import React from "react";
//  Import icons aus dem react icons
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
//
const Comment = ({ item }) => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg mt-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{item.author}</h3>
        <div className="flex justify-center items-center  space-x-4">
          <p className="text-gray-500 text-sm">
            {new Date(item.updatedAt).toString().slice(3, 10)}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(item.updatedAt).toString(15, 25)}
          </p>
          <div className="flex justify-center items-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
      <p className="px-4 mt-2">{item.comment}!</p>
    </div>
  );
};

export default Comment;
