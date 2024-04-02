import React from "react";
import imgBook from "../../assets/books.png";
const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="flex w-[35%] h-[200px] jsutify-center items-center">
        <img src={imgBook} alt="" />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2x1">
          10 Uses of artifcial intelliganze in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between mb:mb-4">
          <p>@snehasishdev</p>
          <div className="flex space-x-2">
            <p>16/03/2024</p>
            <p>23:41</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Prominente Beispiele für KI-Software im täglichen Leben sind
          Sprachassistenten, Bilderkennung, Empfehlungssysteme, persönliche
          Assistenten, Übersetzungswerkzeuge, Chatbots, Gesichtserkennung und
          maschinelles Lernen.
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
