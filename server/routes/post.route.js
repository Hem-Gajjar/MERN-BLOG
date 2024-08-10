import express from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
const router = express.Router();
router.post("/create", verifyUser, createPost);
router.get("/getposts", getPosts);
export default router;