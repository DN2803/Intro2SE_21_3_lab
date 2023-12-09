const doctorModel = require("../models/doctorModel")

exports.getDoctorsID_Name = async (req, res) => {
  try {
    const doctorsList = await doctorModel.getDoctorsID_Name();
    return res.status(200).json({ doctorsList });
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
