const express = require("express");
const { createAppointment } = require("../controllers/appointmentController");

const appointmentRoutes = express.Router();


appointmentRoutes.post("/createAppointment", createAppointment);

module.exports = appointmentRoutes;
