const AppointmentModel = require("../models/appointmentModel");

exports.createAppointment = async (req, res) => {
  try {
    // Xử lý logic tạo lịch hẹn và nhận thông tin chi tiết
    const {
      name,
      gender,
      address,
      phonenumber,
      email,
      period,
      type,
      doctor,
      date,
    } = req.body;

    console.log("Received appointment data from Frontend:");
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Address:", address);
    console.log("Phone Number:", phonenumber);
    console.log("Email:", email);
    console.log("Period:", period);
    console.log("Type:", type);
    console.log("Doctor:", doctor);
    console.log("Date:", date);

    // Trả về thông tin chi tiết trong response
    return res.status(201).json({
      message: "Appointment created successfully"
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
