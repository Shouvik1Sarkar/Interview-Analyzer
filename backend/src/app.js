import express from "express";
import cors from "cors";
import agentRoutes from "./routes/agent.routes.js";

const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://yourapp.vercel.app",
  "http://localhost:8000",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use("/api/v1/agent", agentRoutes);

export default app;
