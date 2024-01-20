const express = require("express");
const { addPatient, getPatientDetailInformation} = require("../controllers/patientController");


const patientRouter = express.Router();


patientRouter.post("/addPatient", addPatient);
patientRouter.get("/getPatientDetailInformation/:maBN", getPatientDetailInformation);
module.exports = patientRouter;