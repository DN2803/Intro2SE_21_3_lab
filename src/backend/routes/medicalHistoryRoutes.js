const express = require("express");

const { addOrUpdateMedicalHistory,getMedicalHistory} = require("../controllers/medicalHistoryController");

const medicalHistoryRouter = express.Router();



medicalHistoryRouter.post("/addOrUpdateMedicalHistory", addOrUpdateMedicalHistory);

medicalHistoryRouter.get("/getMedicalHistory/:mabn/:ngaykham/:username",getMedicalHistory);

module.exports = medicalHistoryRouter;