import express from "express";
import cors from "cors";
import bonsaiRoutes from "./routes/bonsaiRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/bonsai", bonsaiRoutes);

export default app;
