const db = require("../models/connect");
const sql = require("mssql");

class AppointmentModel {
  constructor({
    name,//
    gender,//
    address,//
    phonenumber,//
    email,//
    period,//
    type,
    date,//
    doctorID,//
    status,//
  }) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.phonenumber = phonenumber;
    this.email = email;
    this.period = period;
    this.type = type;
    this.date = date;
    this.doctorID = doctorID;
    this.status = status;
  }
  static async createAppointment(appointmentData) {
    let pool;
    try {
      pool = await db.connectToDatabase();

      const request = pool.request();
      // Thêm logic kiểm tra hợp lệ của dữ liệu ở đây...

      // Thực hiện truy vấn INSERT để tạo lịch hẹn
      const result = await request
        .input("patientId", sql.Int, appointmentData.patientId)
        .input("doctorId", sql.Int, appointmentData.doctorId)
        .input("appointmentTime", sql.DateTime, appointmentData.appointmentTime)
        .output("appointmentId", sql.Int)
        .execute("dbo.uspCreateAppointment");

      const createdAppointmentId = result.output.appointmentId;

      return createdAppointmentId;
    } catch (error) {
      console.error("Error creating appointment:", error.message);
      throw new Error("Failed to create appointment");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }
}

module.exports = AppointmentModel;
