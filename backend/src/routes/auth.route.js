import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signUp", signup);

router.post("/login", login)

router.post("/logout", logout)

export default router;