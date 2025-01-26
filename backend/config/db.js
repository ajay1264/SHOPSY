const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Attempting to connect to DB...");

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    // If the connection is successful, log this:
    console.log("Connected to DB");
  } catch (err) {
    // If there is an error during the connection, log the error:
    console.error("Error connecting to DB:", err);
  }
}

module.exports = connectDB;
