import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/connectDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Exam Notes AI Backend Runing",
  });
});
app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
  connectDb();
});
