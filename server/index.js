import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB Database is connected sir.."))
  .catch((err) => console.log("Error::" + err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes); // User Route
app.use("/api/auth", authRoutes); // Auth Route
app.use("/api/post", postRoutes); // Auth Route
app.use("/api/comment", commentRoutes);
app.get("/", (req, res) => {
  res.send("Hello from node hem!");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Intenal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
