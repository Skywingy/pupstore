import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export function BonsaiTree() {
  const user = useAuth(); // 👈 Already verified by ProtectedRoute
  const [bonsai, setBonsai] = useState<{ level: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBonsai = async () => {
      if (!user) return;

      try {
        const token = await user.getIdToken();
        const res = await fetch("http://localhost:8080/api/bonsai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: user.uid }),
        });

        const data = await res.json();
        setBonsai(data);
      } catch (err) {
        console.error("Failed to fetch bonsai:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBonsai();
  }, [user]);

  if (loading) return <p className="text-center p-6">Loading bonsai data...</p>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Your Bonsai Tree</h1>

      {user && (
        <div className="mb-4 text-left max-w-md mx-auto">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>UID:</strong> {user.uid}
          </p>
        </div>
      )}

      {bonsai ? (
        <p className="text-lg font-medium">🌱 Bonsai Level: {bonsai.level}</p>
      ) : (
        <p className="text-red-500">No bonsai found or failed to load.</p>
      )}
    </div>
  );
}
