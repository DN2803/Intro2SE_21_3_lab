const MedicalHistoryModel = require("../models/medicalHistoryModel");

exports.addOrUpdateMedicalHistory = async (req, res) => {
  try {
    const {
      doctorUsername,
      patientID,
      dateCase,
      patientSymptom,
      patientDiagnose,
    } = req.body;
    const medicalHistory = {
      patientID: patientID,
      dateCase: dateCase,
      doctorID: doctorUsername,
      patientSymptom: patientSymptom,
      patientDiagnose: patientDiagnose,
    };

    console.log(medicalHistory);
    // Gọi phương thức tạo lịch hẹn từ AppointmentModel
    const responseFromDB = await MedicalHistoryModel.addOrUpdateMedicalHistory(
      medicalHistory
    );

    console.log(responseFromDB);
    if (responseFromDB === "Inserting") {
      return res.json({
        success: true,
        message: "Thêm vào bệnh sử thành công.",
      });
    } else if (responseFromDB === "Updating") {
      return res.json({
        success: false,
        message: "Cập nhật bệnh sử thành công.",
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getMedicalHistory = async (req, res) => {
  try {
    const patient_id = req.params.mabn;
    const formattedDate = req.params.ngaykham;
    const doctor_username = req.params.username;
    console.log(req.params);

    const medicalHistoryInformation = await MedicalHistoryModel.getMedicalHistory(patient_id,formattedDate,doctor_username);
    console.log(medicalHistoryInformation);
    return res.json({ medicalHistoryInformation });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};