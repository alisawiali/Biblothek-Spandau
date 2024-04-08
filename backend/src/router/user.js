import { Router } from "express";
import { deletedUser, getUserId, updateUser } from "../controller/user.js";
import { verifyToken } from "../middlewares/middleware.js";

const router = Router();

//
// Middleware vor den Routenaufrufen
// router.use(verifyToken);

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deletedUser);
router.get("/");
router.get("/:id", getUserId);
router.post("/");

export default router;
