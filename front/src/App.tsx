import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages/Login";
import { SignupForm } from "./pages/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BonsaiTree } from "./pages/BonsaiTree";
import { VendingMachine } from "./pages/Vending";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="bonsai" element={<BonsaiTree />} />
          <Route path="vending" element={<VendingMachine />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
