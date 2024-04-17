import React, { Profiler, useContext, useEffect, useState } from "react";
import { Footer, Navbar, ProfilePost } from "../compoents/UL";
import { UserHookContext } from "../context/userContext";
import axios from "axios";
import { URL } from "../url";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPossword] = useState("");
  const [update, setUpdate] = useState(false);
  const [post, setPosts] = useState([]);
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserHookContext);

  // Fetch-Benutzerprofil
  const fetchProfile = async () => {
    try {
      if (user && user._id) {
        const res = await axios.get(`${URL}/api/users/${user._id}`);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPossword(res.data.password);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, [param]);

  // Update User daten
  const handelUserUpdate = async () => {
    setUpdate(false);
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
      setUpdate(true);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Deteted user
  const handeUserDeelet = async () => {
    try {
      const deletUser = await axios.delete(`${URL}/api/users/${user._id}`, {
        withCredentials: true,
      });

      setUser(null);
      navigate("/");
      console.log(deletUser.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch-Benutzerbeiträge
  const fetchUserPosts = async () => {
    try {
      if (user && user._id) {
        const res = await axios.get(`${URL}/api/posts/user/${user._id}`);
        setPosts(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //

  //
  useEffect(() => {
    fetchUserPosts();
  }, [param]);
  //
  return (
    <div>
      <Navbar />
      <div className=" px-8 md:[200px] mt-12 flex flex-col-reverse md:flex-row  md:items-start ">
        {/* left */}
        <div className="flex flex-col md:w-[70%] w-full items-center mt-8">
          <h1 className="text-xl font-bold mb-4 ">Your posts</h1>
          {post?.map((prof) => (
            <ProfilePost key={prof._id} prof={prof} />
          ))}
        </div>
        {/* right */}
        <div className="mt-12 md:w-[30%] w-full ">
          <div className="  flex flex-col space-y-4 items-center bg-gray-100  ml-4 p-2 rounded-sm mt-8 ">
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
                Delet
              </button>
            </div>
            {update && (
              <h3 className="text-green-500 text-sm text-centermt-4">
                user Updated successfully!
              </h3>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
