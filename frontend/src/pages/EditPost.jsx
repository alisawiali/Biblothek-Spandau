import React, { useContext, useState } from "react";
import { Navbar, Footer } from "../compoents/UL";
// Import icons aud dem reat icons
import { ImCross } from "react-icons/im";
import axios from "axios";
import { URL } from "../url";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { UserHookContext } from "../context/userContext";
const EditPost = () => {
  //
  const postId = useParams().id;
  //  Hocks
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();
  //  usecontext
  const { user } = useContext(UserHookContext);

  const deleteCategory = (item) => {
    const updatedCats = cats.filter((c, i) => i !== item);
    setCats(updatedCats);
  };
  // Funktion zum Hinzufügen einer Kategorie
  const addCategory = () => {
    let updateCats = [...cats];
    updateCats.push(cat);
    setCat("");
    setCats(updateCats);
  };

  /**
   * Fetches a post from the server using the postId, then updates the state
   * with the retrieved post's data.
   * @param {string} postId - The ID of the post to fetch.
   * */
  const fetchPost = async () => {
    try {
      // Send a GET request to the server to fetch the post data
      const res = await axios.get(`${URL}/api/posts/` + postId);
      // Aktualisiert den Zustand mit den abgerufenen Postdaten
      console.log(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setFile(res.data.photo);
      setCats(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const handelUpdate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      console.log(data);
      // Img Upload
      try {
        const imgUpload = await axios.post(`${URL}/api/upload`, data);
        console.log(imgUpload);
        // console.log(imgUpload);
      } catch (error) {
        console.log(error);
      }
    }
    //Post Upload
    try {
      const res = await axios.put(`${URL}/api/posts/` + postId, post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };
  //
  return (
    <div>
      <Navbar />
      <div className=" px-6 py-4 my-20 md:px-[200px] mt-20  h-[500px] ">
        <h1 className="font-bold md:text-2xl text-xl">Update a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4  ">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Enter a title"
            className="px-4 py-2 outline-none"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="px-4"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter post category "
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-sm"
              >
                Add
              </div>
            </div>
            {/* categories */}
            <div className="flex px-4 mt-3">
              {cats?.map((items, id) => (
                <div
                  key={id}
                  className="flex justify-center items-center space-x-2 bg-gray-200 px-2 py-1 rounded-md m-1"
                >
                  <p>{items}</p>
                  <p
                    onClick={() => deleteCategory(id)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm "
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            roes={15}
            cols={30}
            className="px-4 py-2 outline-none h-[20vh] "
            placeholder="Enter Your Description"
          />
          <button
            onClick={handelUpdate}
            className="bg-black w-full md:w-[20%] mx-auto text-white  font-semibold px-4 py-2 md:text-xl text-lg rounded-sm my-8"
          >
            Update
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default EditPost;
