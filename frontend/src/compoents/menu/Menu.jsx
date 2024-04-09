import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserHookContext } from "../../context/userContext";

const Menu = () => {
  const { user } = useContext(UserHookContext);
  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute md:right-32 top-12 right-6 p-4 rounded-md space-y-4">
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <NavLink to="/login"> Login</NavLink>
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <NavLink to="/register"> Register</NavLink>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Profile
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Write
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          My Bücher
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
