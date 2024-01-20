const express = require("express");
const { addPatient} = require("../controllers/patientController");


const patientRouter = express.Router();


patientRouter.post("/addPatient", addPatient);
module.exports = patientRouter;