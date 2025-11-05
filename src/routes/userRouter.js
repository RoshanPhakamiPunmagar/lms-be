import express from "express";
import { auth } from "../middlewares/authMiddleware.js";
import { getUser } from "../controllers/userControllers.js";

const router = express.Router();
//get user data
// api/v1/users
router.get("/", auth, getUser);

export default router;
