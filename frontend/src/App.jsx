import React from "react";
import {
  Footer,
  Home,
  Login,
  Navbar,
  PostDetails,
  Register,
} from "./compoents/UL";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
};

export default App;
