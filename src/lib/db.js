import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected ${conn.connection.host}`);
  } catch (err) {
    console.log("Error connecting to database", err);
    process.exit(1); // exit with failure
  }
};
