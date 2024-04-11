import jwt from "jsonwebtoken";

// Middleware zur Überprüfung des Tokens
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Your are not authenticated to access");
  }
  jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
    if (err) {
      return res.status(403).json("Token is not Vaild");
    }
    // Annahme: Die Benutzer-ID ist in den Token-Daten enthalten
    req.userId = data._id;
    next();
  });
};
