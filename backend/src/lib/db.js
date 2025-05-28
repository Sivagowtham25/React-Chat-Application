import mongoose from "mongoose";
import { config } from "dotenv";
import dotenv from "dotenv";

dotenv.config();


export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
