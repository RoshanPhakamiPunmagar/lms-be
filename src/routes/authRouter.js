import express from "express";
import {
  createUser,
  loginUser,
  renewToken,
} from "../controllers/authControllers.js";
import {
  loginValidation,
  newUserValidation,
} from "../middlewares/joiValidation.js";
import { rewnewauth } from "../middlewares/authMiddleware.js";

const router = express.Router();

// api/v1/auth/register
router.post("/register", newUserValidation, createUser);

// api/v1/auth/login
router.post("/login", loginValidation, loginUser);

// api/v1/auth/renew-jwt
// renew token authenticator
router.get("/renew-jwt", rewnewauth, renewToken);

export default router;
