import React, { useState } from "react";
import { Footer, Navbar } from "../compoents/UL";
// Import icons aud dem reat icons
import { ImCross } from "react-icons/im";

//  Exporting  CreatePost
const CreatePost = () => {
  //  Hocks
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const deleteCategory = (item) => {
    const updatedCats = cats.filter((c, i) => i !== item);
    setCats(updatedCats);
  };
  // Funktion zum Hinzufügen einer Kategorie
  const addCategory = () => {
    //   setCats((prevCats) => [...prevCats, cat]) setCats((prevent) => [...prevent, cats]); // Eine neue Kategorie hinzufügen
    //   setCat(""); // Kategorie zurücksetzen ODER-------------
    let updateCats = [...cats];
    updateCats.push(cat);
    setCat("");
    setCats(updateCats);
  };

  return (
    <div>
      <Navbar />
      <div className=" px-6  md:px-[200px] mt-20  h-[450px]">
        <h1 className="font-bold md:text-2xl text-xl">Create a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4   ">
          <input
            type="text"
            placeholder="Enter a title"
            className="px-4 py-2 outline-none"
          />
          <input type="file" className="px-4" />
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
            roes={15}
            cols={30}
            className="px-4 py-2 outline-none"
            placeholder="Enter Your Description"
          />
          <button className="bg-black w-full md:w-[20%] mx-auto text-white  font-semibold px-4 py-2 md:text-xl text-lg rounded-sm">
            create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
