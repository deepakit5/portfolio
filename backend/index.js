const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const visitorRoutes = require("./routes/visitor");
const app = express();
var cors = require("cors");

const PORT = process.env.PORT || 4000;


// Allow requests from a specific origin (replace with your local IP)
const corsOptions = {
  // origin: 'http://your-local-ip-address:3000',

  // origin: ' http://192.168.255.242:3000',
  

  origin: "*",
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

app.use("/api/v1", visitorRoutes);

// CORS Configuration
app.listen(PORT,'0.0.0.0', () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
