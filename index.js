import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

const app = express();

connectDB();

dotenv.config();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
