const db = require("./connect");
const sql = require("mssql");

class MedicalRecordModel {
  constructor({
    patientID,
    patientName,
    patientDOB,
    patientGender,
    patientPhone,
    patientMail,
  }) {
    this.patientID = patientID;
    this.patientName = patientName;
    this.patientDOB = patientDOB;
    this.patientGender = patientGender;
    this.patientPhone = patientPhone;
    this.patientMail = patientMail;
  }

  static async getListPatientsByDate(date, doctorID) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("date", sql.VarChar, date)
        .input("doctorID", sql.Char(10), doctorID)
        .execute("dbo.uspGetPatientsByDate");

      const patientsList = result.recordset.map((row) => ({
        patientID: row.MABN,
        patientName: row.HOTEN_BN,
        patientDOB: row.NGAYSINH,
        patientGender: row.GIOITINH,
        patientPhone: row.SDT_BN,
        patientMail: row.EMAIL_BN,
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

module.exports = MedicalRecordModel;