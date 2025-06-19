import express from "express";
import cors from "cors";
import bonsaiRoutes from "./routes/bonsaiRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/bonsai", bonsaiRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

export default app;
