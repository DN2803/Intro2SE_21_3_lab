const MedicalRecordModel = require("../models/medicalRecordModel");

exports.getListPatients = async (req, res) => {
  try {
    const doctorID = req.params.id
    console.log(doctorID);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}/${month}/${day}`;

    console.log(formattedDate);
    // Coi lại nên truyền tham số gì vào?
    const patientsList = await MedicalRecordModel.getListPatientsFromAppointment(
      formattedDate,
      doctorID
    );
    console.log(patientsList);
    return res.status(200).json({ patientsList });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getListPatientsPharmacist = async (req, res) => {
  try {
    // Coi lại nên truyền tham số gì vào?
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);

    const patientsList = await MedicalRecordModel.getListPatientsByDate(formattedDate, 'NULL');
    console.log(patientsList);
    return res.status(200).json({ patientsList });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};