// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

// Create Express app
const app = express();

// Enable CORS for cross-origin requests (important for frontend-backend communication)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/mern-crud", {
  useNewUrlParser: true,        // Use new MongoDB URL parser
  useUnifiedTopology: true      // Use new server discovery and monitoring engine
})
.then(() => console.log("MongoDB connected"))   // Log success message
.catch(err => console.log(err));                // Log error if connection fails

// Use user routes (all routes start with /api/users)
app.use("/api/users", userRoutes);

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
