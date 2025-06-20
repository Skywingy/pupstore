import { authAdmin } from "../lib/firebaseAdmin.js";

export const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("---------------", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const idToken = authHeader.split(" ")[1];

  console.log("!!!!!!!!!", idToken);

  try {
    const decodedToken = await authAdmin.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(403).json({ error: "Forbidden" });
  }
};
