
import "dotenv/config";
import express from "express";

import apiRouter from "./routes/apiRouter.js";
import authRoutes from "./routes/authRoutes.js";
import contestRoutes from "./routes/contestRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dailyQuestionRoutes from "./routes/dailyQuestionRoutes.js";
import questRoutes from './routes/questRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api", apiRouter);
app.use("/auth", authRoutes);
app.use("/contests", contestRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/daily-question", dailyQuestionRoutes);
app.use("/user", userRoutes);


const port = process.env.PORT || 3001;

app.listen(port, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${port}`);
});

export default app;