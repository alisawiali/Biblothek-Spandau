import React, { useContext, useEffect, useState } from "react";
import { Footer, Navbar, ProfilePost } from "../compoents/UL";
import { UserHookContext } from "../context/userContext";
import axios from "axios";
import { URL } from "../url";
import { useParams } from "react-router-dom";

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPossword] = useState("");
  const { user } = useContext(UserHookContext);
  console.log(user);
  //
  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${URL}/api/users/` + user._id);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPossword(res.data.possword);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, [param]);

  // Updateeelt User
  const handelUserUpdate = async () => {
    try {
      const res = await axios.put(
        `${URL}/api/users/` + user._id,
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Deteted user
  const handeUserDeelet = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //
  return (
    <div>
      <Navbar />
      <div className=" px-8 md:[200px] mt-12 flex flex-col-reverse md:flex-row  md:items-start ">
        {/* left */}
        <div className="flex flex-col md:w-[70%] w-full items-center mt-8">
          <h1 className="text-xl font-bold mb-4 ">Your posts</h1>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
        {/* right */}
        <div className="md:top-12  z-0 md:w-[30%] w-full ">
          <div className="  flex flex-col space-y-4 items-center bg-gray-100  ml-4 p-2 rounded-sm mt-8">
            <h1 className="text-xl  font-bold mb-4">Profile</h1>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              className="outline-none  px-4 py-2 text-gray-500"
              placeholder="Your username"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="outline-none  px-4 py-2 text-gray-500"
              placeholder="Your email"
            />
            <input
              onChange={(e) => setPossword(e.target.value)}
              value={password}
              type="password"
              className="outline-none  px-4 py-2 text-gray-500"
              placeholder="Your password"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={handelUserUpdate}
                className="text-white font-semibold bg-black px-4 py-2 hover:text-white hover:bg-gray-700 ease-in duration-300 rounded hover:rounded-lg"
              >
                Update
              </button>
              <button
                onClick={handeUserDeelet}
                className="text-white font-semibold bg-black px-4 py-2 hover:text-white hover:bg-gray-700 ease-in duration-300 rounded hover:rounded-lg"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
