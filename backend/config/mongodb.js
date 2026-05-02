import mongoose from "mongoose";
import dns from "node:dns";

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined");
  }

  dns.setServers(["8.8.8.8", "1.1.1.1"]);

  try {
    await mongoose.connect(mongoUri, {
      family: 4,
      serverSelectionTimeoutMS: 10000,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
