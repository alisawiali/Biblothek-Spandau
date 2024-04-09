import { Router } from "express";
import {
  addPost,
  deletPost,
  getAllPosts,
  getPostId,
  getUserId,
  updatePost,
} from "../controller/post.js";

import { verifyToken } from "../middlewares/middleware.js";

const router = Router();

//
router.post("/create", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletPost);
router.get("/", getAllPosts);
router.get("/:id", getPostId);
router.get("/user/:userId", getUserId);

export default router;
