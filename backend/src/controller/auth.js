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
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).send("Wroung credentials");
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "3m", //  Das Token läuft nach 3 Monat ab
      }
    );
    const { password, ...info } = user._doc;
    res.cookie("token", token).status(200).send(info);

    res.status(200).json(user);
  } catch (error) {
    next(error.message);
  }
};

//LOGOUT
export const logout = (req, res, next) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .send({ message: "User Logged out successfully!" });
  } catch (error) {
    next(error.message);
  }
};
// Funktion zum Abrufen des Benutzers vom Server
//  REFETCH USER
export const refechUser = async (req, res, next) => {
  const token = req.cookies.token || {};
  jwt.verify(token, process.env.SECRET_KEY, {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(data);
  });
};
  