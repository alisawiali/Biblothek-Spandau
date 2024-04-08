import { Router } from "express";
import {
  addPost,
  deletPost,
  getAllPosts,
  getPostId,
  getUserId,
  updatePost,
} from "../controller/post.js";

const router = Router();

//
router.post("/create", addPost);
router.put("/:id", updatePost);
router.delete("/:id", deletPost);
router.get("/", getAllPosts);
router.get("/:id", getPostId);
router.get("/user/:userId", getUserId);
// router.get("/search/:prompt", searchPosts);

export default router;
