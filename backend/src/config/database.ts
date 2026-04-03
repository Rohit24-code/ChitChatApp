import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MONGO DB Connectedd successfully");
  } catch (error) {
    console.error("error while connecting mongo", error);
    process.exit(1);
  }
};
