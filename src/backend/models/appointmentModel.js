const db = require("../models/connect");
const sql = require("mssql");

class AppointmentModel {
  constructor({
    name, //
    gender, //
    address, //
    phonenumber, //
    email, //
    period, //
    type,
    date, //
    doctorID, //
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
  }
  static async createAppointment(appointmentData) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      // Thực hiện truy vấn INSERT để tạo lịch hẹn
      const result = await request
        .input("phoneNum", sql.Char(10), appointmentData.phonenumber)
        .input("date", sql.Date, appointmentData.date)
        .input("period", sql.NVarChar(10), appointmentData.period)
        .input("doctorID", sql.Char(10), appointmentData.doctorID)
        .input("patientName", sql.NVarChar(50), appointmentData.name)
        .input("email", sql.VarChar(30), appointmentData.email)
        .input("gender", sql.NVarChar(3), appointmentData.gender)
        .input("address", sql.NVarChar(50), appointmentData.address)
        .input("service", sql.NVarChar(50), appointmentData.type)
        .output("responseMessage", sql.NVarChar(250))
        .execute("dbo.uspCreateAppointment");

      const responseMessage = result.output.responseMessage;
      
      return responseMessage;
    } catch (error) {
      console.error("Error creating appointment:", error.message);
      throw new Error("Failed to create appointment");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }


  static async getListPatientsFromAppointment(date, doctorID) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("date", sql.VarChar, date)
        .input("doctorID", sql.Char(10), doctorID)
        .execute("dbo.uspGetPatientFromAppointment");

      const patientsList = result.recordset.map((row) => ({
        patientSTT: row.STT,
        patientName: row.HOTEN,
        patientMail: row.EMAIL,
        patientGender: row.GIOITINH,
        patientPhone: row.SDT,
      }));
      return patientsList;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }
}

module.exports = AppointmentModel;
