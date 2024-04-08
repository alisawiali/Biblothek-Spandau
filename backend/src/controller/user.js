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
    res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
};

//DELETE

export const deletedUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    await Post.deleteMany({ userId: req.params.id });
    await Comment.deleteMany({ userId: req.params.id });

    res.status(200).json("post and user successfully deleted");
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: true,
        message: "Benutzername bereits deleted",
      });
    }
    next(error.message);
  }
};

// //GET USER
// export const getUser = (req, res, next) => {
//   try {
//   } catch (error) {}
// };

// // GET IDUSER
// export const getUserId = (req, res, next) => {
//   try {
//   } catch (error) {}
// };

// // POST  USER
// export const creatUser = (req, res, next) => {
//   try {
//   } catch (error) {}
// };
