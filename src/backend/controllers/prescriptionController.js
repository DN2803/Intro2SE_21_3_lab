const PrescriptionModel = require("../models/prescriptionModel");

exports.getPrescription = async (req, res) => {
  try {
    const maBN = req.query.maBN;
    const ngayTao = req.query.ngayTao;

    const prescriptionData = await PrescriptionModel.getPrescription(
      maBN,
      ngayTao
    );
    return res.status(200).json({ prescriptionData });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
