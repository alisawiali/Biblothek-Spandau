import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// Import icons aus dem react icons
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import Menu from "../menu/Menu";
import { UserHookContext } from "../../context/userContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const pathnamePar = useLocation().pathname;
  // console.log(pathnamePar);
  // console.log(prompt);
  const showMenu = () => {
    setMenu(!menu);
  };
  //  use state
  const { user } = useContext(UserHookContext);

  return (
    <div className="md:sticky md:top-0 bg-gray-200 flex items-center justify-between px-6 py-4 md:px-[200px] z-99 ">
      <h1 className="text-lg md:text-x1 font-extrabold">
        <NavLink to="/">Bibliothek</NavLink>
      </h1>
      {pathnamePar === "/" && (
        <div className="flex items-center jsutify-center space-x-2 md:space-x-4">
          <p>
            <BiSearch
              onClick={() => navigate(`?search=${searchTerm}`)}
              className="cursor-pointer"
            />
          </p>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none px-0 text-1 pl-2 rounded-lg "
            type="text"
            placeholder="Search a post"
          />
        </div>
      )}
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
          <div onClick={showMenu} className="">
            <p>
              <FaBars className="cursor-pointer relative" />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3>
            <NavLink to="/register">Register</NavLink>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg">
        <p>
          <FaBars className="cursor-pointer relative" />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
