import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { FirebaseError } from "firebase/app"
import { signInWithPopup } from "firebase/auth"


export function SignupForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: user.uid,
        email: user.email,
      }),
    })
    navigate("/bonsai")
    } catch (err) {
    const errorMessage =
        err instanceof FirebaseError ? err.message : "An unknown error occurred"
    setError(errorMessage)
    }
  }

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user

    await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: user.uid,
        email: user.email,
      }),
    })
    navigate("/bonsai")
  } catch (err) {
    console.error("Google login error:", err)
  }
}

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>Sign up with your email and password.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">Sign Up</Button>
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
          Sign Up with Google
        </Button>
        </form>
      </CardContent>
    </Card>
  )
}
