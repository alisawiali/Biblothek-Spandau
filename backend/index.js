import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./service/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./src/router/auth.js";
import userRouter from "./src/router/user.js";
import postRouter from "./src/router/post.js";
import commentsRouter from "./src/router/comment.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// DB
await connectDB();
app.use(cookieParser());

// Middleware vor den Routen
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentsRouter); 

// Server starten
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
