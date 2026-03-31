import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());

//json data
app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// routes import


// routes declaration


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
