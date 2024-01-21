const express = require("express");
const { getListMedicalHistory } = require("../controllers/medHistoryController2");

const router = express.Router();

router.get("/getListMedicalHistory", getListMedicalHistory);

module.exports = router;