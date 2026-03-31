import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MOGODB_URI)
  .then(() => console.log("mongodb connetd bro"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
