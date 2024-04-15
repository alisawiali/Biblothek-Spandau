import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserHookContext } from "../../context/userContext";
import axios from "axios";
import { URL } from "../../url";

const Menu = () => {
  const { user } = useContext(UserHookContext);
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserHookContext);
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      const res = await axios.get(`${URL}/api/auth/logout`, {
        withCredentials: true,
      });
      // console.log(res.data);
      setUser(null);
      navigate("/login");
    } catch (error) {
      setError(true);
    }
  };

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
        <h3
          onClick={handelLogout}
          className="text-white text-sm hover:text-gray-500 cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
