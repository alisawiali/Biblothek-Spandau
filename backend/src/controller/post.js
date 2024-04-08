import User from "../model/User.js";
import bcrypt from "bcryptjs";
import Post from "../model/Post.js";
import Comment from "../model/Comment.js";

// CREATE NEW POST
export const addPost = async (req, res, next) => {
  try {
    const newPost = await Post(req.body);
    const savePost = await newPost.save();
    res.status(200).send(savePost);
  } catch (error) {
    next(error);
  }
};

// UPDAT POST
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(post);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send(error.message);
    }
    next(error);
  }
};

// DELETED POST ID
export const deletPost = async (req, res, next) => {
  try {
    const deletedIdPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedIdPost) {
      res.status(404).send(`${deletedIdPost} Not Found`);
    }
    res.status(200).send(` Deleted Successfully!`);
  } catch (error) {
    next(error);
  }
};

// GET POST DETAILS
export const getPostId = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).send(`postId not found`);
    }
    res.status(200).send(post);
  } catch (error) {
    next(error);
  }
};

// GET POSTS
export const getAllPosts = async (req, res, next) => {
  const serachPost = req.query;
  try {
    //  $regex: suche zeichenfologe in mongoosDB
    // $options auf "i" gesetzt ist, ignoriert MongoDB die Groß-/Kleinschreibung beim Vergleich von Zeichenfolgen.
    const searchFilter = serachPost
      ? { title: { $regex: serachPost.search, $options: "i" } }
      : null;
    const posts = await Post.find(searchFilter);
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};

// GET USER  COMMENT 
export const getUserId = async (req, res, next) => {
  try {
    //    userId findet sich im Model(PostSchema)
    const posts = await Post.find({ userId: req.params.userId });

    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};


// //  SEARCH POSTS

// export const searchPosts = async (req, res, next) => {
//   try {
//   } catch (error) {}
// };
