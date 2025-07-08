// back/src/controllers/bonsaiController.js
import Bonsai from "../models/Bonsai.js";

// POST /api/bonsai
export const getOrCreateBonsai = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  try {
    let bonsai = await Bonsai.findOne({ userId });

    if (!bonsai) {
      bonsai = await Bonsai.create({ userId, level: 1 });
    }

    res.status(200).json(bonsai);
  } catch (error) {
    console.error("Bonsai creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET /api/bonsai/:userId
export const getBonsaiByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const bonsai = await Bonsai.findOne({ userId });

    if (!bonsai) {
      return res.status(404).json({ error: "Bonsai not found" });
    }

    res.status(200).json(bonsai);
  } catch (error) {
    console.error("Bonsai fetch error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
