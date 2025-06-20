import { User } from "../models/User.js";

// POST /api/user
export const syncUser = async (req, res) => {
  console.log("////////////////");
  const { uid, email } = req.body;

  if (!uid || !email) {
    return res.status(400).json({ error: "UID and email are required" });
  }

  try {
    let user = await User.findOne({ uid });

    if (!user) {
      user = await User.create({ uid, email });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("User sync error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
