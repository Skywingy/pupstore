import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
