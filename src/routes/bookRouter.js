import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// api/v1/books
router.get("/", auth, isAdmin, (req, res, next) => {
  try {
    return res.json({ status: "success", message: "Books found!" });
  } catch (error) {
    next(error);
  }
});

// api/v1/books
router.post("/", (req, res) => {});

export default router;
