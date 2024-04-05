import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/service/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// DB
await connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
