import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("Mongo Uri enviroment variable is not defined");
    }
    await mongoose.connect(mongoUri as string);
    console.log("MONGO DB Connectedd successfully");
  } catch (error) {
    console.error("error while connecting mongo", error);
    process.exit(1);
  }
};
