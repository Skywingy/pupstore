import { auth } from "./firebase";

export async function getIdToken(): Promise<string | null> {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    return await user.getIdToken();
  } catch (err) {
    console.error("Failed to get ID token:", err);
    return null;
  }
}
