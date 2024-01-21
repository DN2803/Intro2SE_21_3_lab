const express = require("express");
const { getPrescription } = require("../controllers/prescriptionController");

const prescriptionRouter = express.Router();

prescriptionRouter.get("/getPrescription", getPrescription);

module.exports = prescriptionRouter;