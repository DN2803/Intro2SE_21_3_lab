const MedicalRecordModel = require("../models/medicalRecordModel");

exports.getListPatients = async (req, res) => {
  try {
    // Coi lại nên truyền tham số gì vào?
    const patientsList = await MedicalRecordModel.getListPatientsByDate("2023-12-03");
    console.log(patientsList);
    return res.status(200).json({ patientsList });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};