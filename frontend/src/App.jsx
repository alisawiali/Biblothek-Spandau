import React from "react";
import {
  CreatePost,
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
        <Route path="/write" element={<CreatePost />} />
        <Route path="/posts/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
};

export default App;
