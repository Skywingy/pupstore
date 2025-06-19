import './App.css'
import { Routes, Route } from "react-router-dom"
import { LoginForm } from './pages/Login'
import { SignupForm } from './pages/SignUp'
import { ProtectedRoute } from './components/ProtectedRoute'
import { BonsaiTree } from './pages/BonsaiTree'

function App() {

  return (
    <>
      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route
        path="/bonsai"
        element={
          <ProtectedRoute>
            <BonsaiTree />
          </ProtectedRoute>
        }
      />
    </Routes>
    </>
  )
}

export default App
