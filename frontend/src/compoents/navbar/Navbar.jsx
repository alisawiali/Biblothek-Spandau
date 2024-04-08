import React from "react";
import { NavLink } from "react-router-dom";

// Import icons aus dem react icons
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const user = false;
  return (
    <div className="md:sticky md:top-0 bg-gray-200 flex items-center justify-between px-6 py-4 md:px-[200px] ">
      <h1 className="text-lg md:text-x1 font-extrabold">
        <NavLink to="/">Bibliothek</NavLink>
      </h1>
      <div className="flex items-center jsutify-center space-x-2 md:space-x-4">
        <p>
          <BiSearch />
        </p>
        <input
          className="outline-none px-0 text-1 pl-2 rounded-lg "
          type="text"
          placeholder="Search a post"
        />
      </div>
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4 ">
        {/*  wenn den User angemeldet ist dann geht zum write sits */}
        {user ? (
          <h3>
            <NavLink to="/write">Write</NavLink>
          </h3>
        ) : (
          <h3>
            <NavLink to="/login">Login</NavLink>
          </h3>
        )}
        {user ? (
          <h3>Profile</h3>
        ) : (
          <h3>
            <NavLink to="/register">Register</NavLink>
          </h3>
        )}
      </div>
      <div className="md:hidden">
        <p>
          <FaBars />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
