import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());

//json data
app.use(express.json());

// routes import
import userRouter from "./routers/user.route.js";

// routes declaration
app.use("/api/v1/user", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors: err.errors || [],
  });
});

export { app };
