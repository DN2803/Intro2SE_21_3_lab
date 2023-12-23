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
      id,
    } = req.body;
    const appointmentData = {
      name: name,
      gender: gender,
      address: address,
      phonenumber: phonenumber,
      email: email,
      period: period,
      type: type,
      date: date,
      doctorID: id,
    };
    console.log("Received appointment data from Frontend:");
    console.log("Name:", appointmentData.name);
    console.log("Gender:", appointmentData.gender);
    console.log("Address:", appointmentData.address);
    console.log("Phone Number:", appointmentData.phonenumber);
    console.log("Email:", appointmentData.email);
    console.log("Period:", appointmentData.period);
    console.log("Type:", appointmentData.type);
    console.log("Doctor:", doctor);
    console.log("Date:", appointmentData.date);
    console.log("ID:", appointmentData.doctorId);
    const newAppointment = new AppointmentModel(appointmentData);
    console.log(newAppointment);
    // Gọi phương thức tạo lịch hẹn từ AppointmentModel
    const responseFromDB = await AppointmentModel.createAppointment(
      newAppointment
    );

    console.log(responseFromDB);
    if (responseFromDB === "Inserting new appointment successfully") {
      return res.status(201).json({
        success: true,
        message: 'Tạo lịch hẹn thành công.',
      });
    } else if (responseFromDB === "Doctor not found") {
      return res.status(404).json({
        success: false,
        message: 'Bác sĩ không tồn tại.',
      });
    } else if (responseFromDB === "Existing this appointment") {
      return res.status(409).json({
        success: false,
        message: 'Đã tồn tại lịch hẹn.',
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
