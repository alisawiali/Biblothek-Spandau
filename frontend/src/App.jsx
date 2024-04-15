import React from "react";
import {
  CreatePost,
  EdidtPost,
  Home,
  Login,
  MyBloge,
  PostDetails,
  Profile,
  Register,
} from "./compoents/UL";
import { Route, Routes } from "react-router-dom";
import { CreateContextProvider } from "./context/userContext";

const App = () => {
  return (
    <div>
      <CreateContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<CreatePost />} />
          <Route path="/posts/post/:id" element={<PostDetails />} />
          <Route path="/edit/:id" element={<EdidtPost />} />
          <Route path="/myblogs/:id" element={<MyBloge />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </CreateContextProvider>
    </div>
  );
};

export default App;
