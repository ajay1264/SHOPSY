const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api", router);

// Port setup
const PORT = process.env.PORT || 8080;

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
}).catch(err => {
    console.error("Error connecting to DB:", err);
    process.exit(1);  // Exit the process if DB connection fails
});
