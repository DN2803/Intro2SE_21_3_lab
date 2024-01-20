const express = require("express");
const { getListPatients, getListPatientsPharmacist } = require("../controllers/medicalRecordController");

const router = express.Router();

router.get("/getListPatientsPharmacist", getListPatientsPharmacist);

module.exports = router;