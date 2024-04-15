import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";

import { connectDB } from "./service/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./src/router/auth.js";
import userRouter from "./src/router/user.js";
import postRouter from "./src/router/post.js";
import commentsRouter from "./src/router/comment.js";

dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: process.env.FRONTEND_API,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
// Middleware für CORS
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// Datenbankverbindung herstellen
await connectDB();

// Cookie-Parser Middleware
app.use(cookieParser());

// Middleware vor den Routen
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentsRouter);

// Aktualisierte Pfadberechnung für das Bilder-Verzeichnis
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use("/images", express.static(path.join(__dirname, "/images"))); // Bilder auslesbar machen

// image unpload Middlewares
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image has been uploaded successfully");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
// Server starten
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
