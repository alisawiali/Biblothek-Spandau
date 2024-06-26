import User from "../model/User.js";
import bcrypt from "bcryptjs";
import Post from "../model/Post.js";
import Comment from "../model/Comment.js";

export const addComment = async (req, res, next) => {
  try {
    // Erstelle einen neuen Kommentar
    const newComment = await Comment.create(req.body);
    res.status(200).send(newComment);
  } catch (error) {
    next(error);
  }
};
// UPDAT POST
export const updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(comment);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send(error.message);
    }
    next(error);
  }
};

// DELETED POSTID
export const deletComment = async (req, res, next) => {
  try {
    const deletedIdComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedIdComment) {
      res.status(404).send(`comment Not Found`);
    }
    res.status(200).send(` Deleted Successfully!`);
  } catch (error) {
    next(error);
  }
};

// GET POST COMMENT
export const getCommentId = async (req, res, next) => {
  try {
    //    postId findet sich im Model(commentSchema)
    const coments = await Comment.find({ postId: req.params.postId });

    res.status(200).send(coments);
  } catch (error) {
    next(error);
  }
};
