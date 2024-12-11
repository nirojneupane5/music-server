import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userRoute from "./routes/userRoute.js";
import musicRoute from "./routes/musicRoute.js";

const app = express();

connectDB();

dotenv.config();

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/music", musicRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
