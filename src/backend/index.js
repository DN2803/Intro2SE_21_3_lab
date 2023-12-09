const db = require("./models/connect");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const booking = require("./routes/doctorRoutes");
const loginRoute = require("./routes/authRoutes");
const appointmentRoute = require("./routes/appointmentRoutes");
const app = express();
const port = 2212;

// Use bodyParser middleware to parse JSON
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use(loginRoute);
app.use(booking);
app.use(appointmentRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
