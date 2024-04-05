import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // const { username, email, password } = req.body;
    const newUser = await User({ ...req.body, password: hash });
    const saveUser = await newUser.save();
    res.status(200).send(saveUser);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Benutzername bereits vorhanden",
      });
    }
    next(error.message);
  }
};

//LOGIN

//LOGOUT
