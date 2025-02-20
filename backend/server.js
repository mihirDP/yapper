import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./config/db.js";
// import db from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3113; //change the port number to 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data(urlEncoded)

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port $`);
  connectMongoDB();
});
