import { User } from "../models/User.js";

// POST /api/user
export const syncUser = async (req, res) => {
  const { email } = req.body;
  const firebaseUid = req.user?.uid; // ✅ Secure UID from token
  if (!firebaseUid || !email) {
    return res.status(400).json({ error: "UID and email are required" });
  }

  try {
    let user = await User.findOne({ firebaseUid });

    if (!user) {
      user = await User.create({ firebaseUid, email });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("User sync error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
