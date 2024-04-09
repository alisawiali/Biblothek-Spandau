import { Router } from "express";
import { login, logout, refechUser, register } from "../controller/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refetch", refechUser);

export default router;
