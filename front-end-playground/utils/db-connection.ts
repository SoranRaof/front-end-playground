import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

let isConnected = false;

const mongoDbUri: string =
  process.env.MONGODB_URI ?? "No environment variable set for MONGODB_URI";

const options: ConnectOptions = {
  dbName: "Playground",
};

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(mongoDbUri, options);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
