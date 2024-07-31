import express from "express";
const router = express.Router();
import { verifyUser } from "../utils/verifyUser.js";
import {
  test,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
router.get("/test", test);
router.put("/update/:userId", verifyUser, updateUser);
router.delete("/delete/:userId", verifyUser, deleteUser);
export default router;
