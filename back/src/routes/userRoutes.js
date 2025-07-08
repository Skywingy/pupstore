import express from "express";
import { syncUser } from "../controllers/userController.js";
import { verifyFirebaseToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyFirebaseToken, syncUser);

export default router;
