import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./config/db.js";
import cookieParser from "cookie-parser";
// import db from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5041; //change the port number to 5041 for the backend server btw!

app.use(express.json()); //to parse req.body for post requests
app.use(express.urlencoded({ extended: true })); //to parse form data(urlEncoded)

app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
