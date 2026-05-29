import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vishal231207m_db_user:db111222512@cluster0.e1wnpay.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectDB;