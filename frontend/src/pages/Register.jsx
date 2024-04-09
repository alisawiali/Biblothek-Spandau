import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Footer } from "../compoents/UL";
import axios from "axios";
import { URL } from "../url";
//
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //
  const navigate = useNavigate();
  const handelRegister = async () => {
    try {
      const res = await axios.post(`${URL}/api/auth/register`, {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (error) {
      setError(true); // Zugriff auf Fehlerantwort über error.response.data
    }
  };

  //
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 md:px-[200px] ">
        <h1 className="text-lg md:text-x1 font-extrabold">
          <NavLink to="/">Bibliothek</NavLink>
        </h1>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="w-full flex justify-center items-center h-[65vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an Aaccount</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full font-black-400  border-2 border-black outline-0 px-1 py-2"
            type="text"
            placeholder="Enter your username "
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full font-black-400 border-2 border-black outline-0 px-1 py-2"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full font-black-400  border-2 border-black outline-0 px-1 py-2"
            type="password"
            placeholder="Enter your password "
          />
          <button
            onClick={handelRegister}
            className="w-full bg-gray-900 text-white py-2 px-4 font-bold rounded-lg hover:bg-gray-700 transition-all duration-500 ease  cursor-pointer"
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm">Somthing went wrong!</h3>
          )}
          <div className="flex justify-between items-center space-x-12">
            <p>Already have an account</p>
            <p className="text-gray-500 hover:text-black">
              <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
