import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-[80vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Log in to your Account</h1>
        <input
          className="w-full font-black-400 border-2 border-black outline-0 px-1 py-2"
          type="text"
          placeholder="Enter your email"
        />
        <input
          className="w-full font-black-400  border-2 border-black outline-0 px-1 py-2"
          type="password"
          placeholder="Enter your password "
        />
        <button className="w-full bg-gray-900 text-white py-2 px-4 font-bold rounded-lg hover:bg-gray-700 transition-all duration-500 ease  cursor-pointer">
          Login
        </button>

        <div className="flex justify-between items-center space-x-12">
          <p>New here?</p>
          <p className="text-gray-500 hover:text-black">
            <NavLink to="/register">Register</NavLink>
          </p>
          {/* <p className="font-light cursor-pointer">Forgot Password?</p>
          <hr className="border-gray-800" />
          <a href="#" className="font-medium cursor-pointer">
            Create an account
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Login;


