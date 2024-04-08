import jwt from "jsonwebtoken";

 const verfiyToken = (req, res, next) => {
   try {
     const token = req.cookies.token;
     if (!token) {
       return res.status(401).send("Your are not authenticated to access");
     }
     jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
       if (err) {
         return res.status(403).json("Token is not Vaild"); //vaild => صالح
       }
       res.userId = data.id;
       next();
     });
   } catch (error) {
     res.status(500).send(error.message);
   }
 };

module.exports = verfiyToken;