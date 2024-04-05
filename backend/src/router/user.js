import { Router } from "express";
import { updateUser } from "../controller/user.js";
const router = Router();

//
router.put("/:id", updateUser);
router.delete("/:id");
router.get("/");
router.get("/:id");
router.post("/");

export default router;
