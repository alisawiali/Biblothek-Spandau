import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Post from "../model/Post.js";
import Comment from "../model/Comment.js";

//UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const newPassword = req.body.password; // Das Passwort aus req.body extrahieren
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt); // Das hash Password
      req.body.password = newPassword; // Das gehashte Passwort in req.body einfügen
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) {
      res.status(409).send("User  nicht exists");
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send("username schon  vorhand");
    }
    next(error);
  }
};

//DELETE

export const deletedUser = async (req, res, next) => {
  try {
 const userId = req.params.id;

 const user = await User.findByIdAndDelete(userId);
 if (!user) {
   return res.status(404).json({ message: "User not found" });
 }
    await Post.deleteMany({ userId: req.params.id });
    await Comment.deleteMany({ userId: req.params.id });

    res.status(200).json("post and user successfully deleted");
  } catch (error) {
    next(error.message);
  }
};


//GET USERID
export const getUserId = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(409).send("User not found");
    }
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    next(error);
  }
};

