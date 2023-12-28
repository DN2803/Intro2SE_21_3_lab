const express = require("express");
const { getListPatients } = require("../controllers/medicalRecordController");

const router = express.Router();

router.get("/getListPatients", getListPatients);

module.exports = router;