import express from "express";
import {
  getOrCreateBonsai,
  getBonsaiByUserId,
} from "../controllers/bonsaiController.js";
import { verifyFirebaseToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyFirebaseToken, getOrCreateBonsai);
router.get("/:userId", verifyFirebaseToken, getBonsaiByUserId);

export default router;
