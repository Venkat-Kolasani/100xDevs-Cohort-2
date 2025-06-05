const express = require("express");
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

const mainRouter = require('./routes/index'); // Import the main router

const app = express();

app.use("/api/v1", mainRouter); // Use the main router for API versioning

app.listen(3000);
