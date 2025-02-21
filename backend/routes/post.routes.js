import express from "express";
import {
  commentOnPost,
  createPost,
  getUserPosts,
  deletePost,
  getAllPosts,
  getFollowingPosts,
  getLikedPosts,
  likeUnlikePost,
} from "../controllers/post.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();
router.get("/all", protectRoute, getAllPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
