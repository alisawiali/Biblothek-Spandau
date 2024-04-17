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
      { _id: user._id, username: user.username, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h", //  Das Token läuft nach 24h   ab
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

//  REFETCH USER
// Controller-Funktion zum Aktualisieren der Benutzerdaten anhand des Tokens im Cookie
export const refechUser = async (req, res, next) => {
  // Das Token aus dem Cookie oder ein leeres Objekt abrufen
  const token = req.cookies.token || {};
  jwt.verify(token, process.env.SECRET_KEY, {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(data);
  });
};
  