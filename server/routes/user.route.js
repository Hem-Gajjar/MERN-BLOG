import express from "express";
const router = express.Router();
import { verifyUser } from "../utils/verifyUser.js";
import { test, updateUser } from "../controllers/user.controller.js";
router.get("/test", test);
router.put("/update/:userId", verifyUser, updateUser);
export default router;