import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = await User({ ...req.body, password: hashPassword });
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
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send("User Not Found!");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).send("Wroung credentials");
    }
      const token = jws.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "3d", // // Das Token läuft nach 3 Monat ab
      });
    res.status(200).json(user);
  } catch (error) {
    next(error.message);
  }
};

//LOGOUT
