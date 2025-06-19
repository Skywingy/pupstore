import express from "express";
import { getOrCreateBonsai } from "../controllers/bonsaiController.js";

const router = express.Router();

router.post("/", getOrCreateBonsai);

export default router;
