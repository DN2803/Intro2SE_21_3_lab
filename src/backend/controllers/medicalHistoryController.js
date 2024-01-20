const MedicalHistoryModel = require("../models/medicalHistoryModel");

exports.getListMedicalHistory = async (req, res) => {
  try {
    const maBN = req.query.maBN;
    const medicalHistories = await MedicalHistoryModel.getListMedicalHistory(maBN);
    console.log(medicalHistories);
    return res.status(200).json({ medicalHistories });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
