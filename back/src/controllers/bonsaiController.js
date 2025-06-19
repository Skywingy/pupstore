import Bonsai from "../models/Bonsai.js";

export const getOrCreateBonsai = async (req, res) => {
  console.log("-----------------");
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: "Missing userId" });

  try {
    let bonsai = await Bonsai.findOne({ userId });
    if (!bonsai) {
      bonsai = await Bonsai.create({ userId });
    }
    res.json(bonsai);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
