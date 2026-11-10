import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log("Database not connected!");
  }
};
export default connectDb;
