const db = require("./models/connect");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const booking = require("./routes/doctorRoutes");
const loginRoute = require("./routes/authRoutes");
const appointmentRoute = require("./routes/appointmentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const drugRoutes = require("./routes/drugRoutes");
const patientRoutes = require("./routes/patientRoutes");
const medicalHistoryRoutes = require("./routes/medicalHistoryRoutes")
const app = express();
const port = 2212;

// Use bodyParser middleware to parse JSON
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use(loginRoute);
app.use(booking);
app.use(appointmentRoute);
app.use(employeeRoutes);
app.use(medicalRecordRoutes);
app.use(feedbackRoutes);
app.use(drugRoutes);
app.use(patientRoutes);
app.use(medicalHistoryRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
