import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  getUserProfile,
  // getSuggestedProfile, //not in use!
  followUnfollowUser,
  getSuggestedUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile); //get user profile
router.get("/suggested", protectRoute, getSuggestedUsers); //get suggested users
router.post("/follow/:id", protectRoute, followUnfollowUser); //follow/unfollow user
router.post("/update", protectRoute, updateUser); //update user profile`

export default router;
