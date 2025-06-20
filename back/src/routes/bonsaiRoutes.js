// back/src/routes/bonsai.js
import express from "express";
import {
  getOrCreateBonsai,
  getBonsaiByUserId,
} from "../controllers/bonsaiController.js";

const router = express.Router();

router.post("/", getOrCreateBonsai);
router.get("/:userId", getBonsaiByUserId);

export default router;
