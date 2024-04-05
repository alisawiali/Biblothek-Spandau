import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//UPDATE

export const updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
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

export const deletedUser = (req, res, next) => {
  try {
  } catch (error) {}
};

//GET USER
export const getUser = (req, res, next) => {
  try {
  } catch (error) {}
};

// GET IDUSER
export const getUserId = (req, res, next) => {
  try {
  } catch (error) {}
};

// POST  USER
export const creatUser = (req, res, next) => {
  try {
  } catch (error) {}
};
