const express = require("express");
const {getListMedicalHistory} = require("../controllers/medicalHistoryController");

const router = express.Router();

router.get("/getListMedicalHistory", getListMedicalHistory);

module.exports = router;