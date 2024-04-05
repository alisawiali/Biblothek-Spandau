import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./service/db.js";
import authRouter from "./src/router/auth.js";
import userRouter from "./src/router/user.js";
//middlewares
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// DB
await connectDB();

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);



// 
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
