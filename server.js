import express from "express";
import connectDB from "./config/config.js";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/", noteRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});