const express = require("express");
const { createAppointment,getListPatients,getPatientBySTT} = require("../controllers/appointmentController");


const appointmentRoutes = express.Router();


appointmentRoutes.post("/createAppointment", createAppointment);
appointmentRoutes.get("/getListPatients/:id", getListPatients);
appointmentRoutes.get("/getPatientBySTT/:patientSTT", getPatientBySTT);
module.exports = appointmentRoutes;
