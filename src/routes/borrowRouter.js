import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// create borrow history
router.post("/:bookId", auth, createBorrowHistory);

export default router;
