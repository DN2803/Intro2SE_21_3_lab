const PatientModel = require("../models/patientModel");

exports.addPatient = async (req, res) => {
  try {
    // Xử lý logic tạo lịch hẹn và nhận thông tin chi tiết
    const {
      patientID,
      patientName,
      patientBirth,
      patientGender,
      patientPhone,
      patientMail,
      patientContraindication,
      patientAllergy,
      patientSTT,
    } = req.body;
    const patientData = {
      MABN: patientID,
      HOTEN_BN: patientName,
      NGAYSINH: patientBirth,
      GIOITINH: patientGender,
      SDT_BN: patientPhone,
      EMAIL_BN: patientMail,
      DIACHI: "",
      CHONGCHIDINH: patientContraindication,
      DIUNG: patientAllergy,
      STT: patientSTT,
    };
    console.log("controller");

    const newPatient = new PatientModel(patientData);
    console.log(newPatient);
    // Gọi phương thức tạo lịch hẹn từ AppointmentModel
    const responseFromDB = await PatientModel.addPatient(newPatient);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPatientDetailInformation = async (req, res) => {
  const maBN = req.params.maBN;
  try {
    const patientInformation = await PatientModel.getPatientDetailInformation(maBN);
    return res.status(200).json({ patientInformation });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}