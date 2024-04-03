import React from "react";
import imgBook from "../../assets/books.png";
const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-2 flex-col md:flex-row myt-8  space-y-4 md:space-y-0 md:space-x-2">
      {/* left */}
      <div className="flex md:w-1/3 h-[200px] justify-center items-center">
        <img src={imgBook} alt="" className="h-full w-full" />
      </div>
      {/* right */}
      <div className="flex flex-col md:w-2/3 ">
        <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2x1 ">
          10 Uses of artifcial intelliganze in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between mb:mb-4">
          <p>@snehasishdev</p>
          <div className="flex space-x-2">
            <p>16/03/2024</p>
            <p>23:41</p>
          </div>
        </div>
        <p className="text-sm  my-4">
          Prominente Beispiele für KI-Software im täglichen Leben sind
          Sprachassistenten, Bilderkennung, Empfehlungssysteme, persönliche
          Assistenten, Übersetzungswerkzeuge, Chatbots, Gesichtserkennung und
          maschinelles Lernen
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
