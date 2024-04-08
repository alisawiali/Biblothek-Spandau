import { Router } from "express";
import { deletedUser, getUserId, updateUser } from "../controller/user.js";
const router = Router();

//
router.put("/:id", updateUser);
router.delete("/:id", deletedUser);
router.get("/");
router.get("/:id", getUserId);
router.post("/");

export default router;
