import { Router } from "express";
import {
  addComment,
  deletComment,
  getCommentId,
  updateComment,
} from "../controller/comment.js";
import { verifyToken } from "../middlewares/middleware.js";
const router = Router();

// Hinzufügen eines neuen Kommentars
router.post("/create", verifyToken, addComment);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deletComment);
router.get("/post/:postId", getCommentId);

export default router;
