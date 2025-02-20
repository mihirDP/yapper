//This is Temoorary Database Configuration

// db.js
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("your_mongodb_connection_string", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectMongoDB; // Export the function
