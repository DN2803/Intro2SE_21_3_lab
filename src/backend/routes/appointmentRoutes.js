const express = require("express");
const { createAppointment,getListPatients } = require("../controllers/appointmentController");

const appointmentRoutes = express.Router();


appointmentRoutes.post("/createAppointment", createAppointment);
appointmentRoutes.get("/getListPatients/:id", getListPatients);
module.exports = appointmentRoutes;
