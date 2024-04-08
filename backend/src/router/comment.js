import { Router } from "express";
import {
  addComment,
  deletComment,
  getCommentId,
  updateComment,
} from "../controller/comment.js";
const router = Router();

router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deletComment);
router.get("/post/:postId", getCommentId);

export default router;
