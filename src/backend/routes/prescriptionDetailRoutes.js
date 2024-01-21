const express = require("express");
const { addMedicineToPreDetail} = require("../controllers/prescriptionDetailController");


const prescriptionDetailRouter = express.Router();


prescriptionDetailRouter.post("/addMedicineToPreDetail", addMedicineToPreDetail);

module.exports = prescriptionDetailRouter;